"use client";

import { useEffect, useState } from "react";
import { Search, RefreshCw, PackageCheck } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Order = {
  id: number;
  date: string;
  Name: string;
  phone: string;
  address: string;
  note: string;
  products: string;
  deliveryCharge: number;
  total: number;
  Status: string;
};

const statuses = [
  "Pending",
  "Confirmed",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const loadOrders = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/orders", { cache: "no-store" });
      const result = await res.json();

      if (result.success) {
        setOrders(result.data || []);
      } else {
        toast.error(result.message || "Order load করা যায়নি");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server থেকে order load করা যায়নি");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (rowId: number, status: string) => {
    try {
      setUpdatingId(rowId);

      const response = await fetch("/api/orders/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "updateStatus",
          rowId,
          status,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        toast.error(result.message || "Status update করা যায়নি");
        return;
      }

      setOrders((prev) =>
        prev.map((order) =>
          order.id === rowId ? { ...order, Status: status } : order,
        ),
      );

      toast.success("Status update হয়েছে");
    } catch (error) {
      console.error(error);
      toast.error("Status update করা যায়নি");
    } finally {
      setUpdatingId(null);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadOrders();
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const filteredOrders = [...orders].reverse().filter((order) => {
    const keyword = search.toLowerCase();

    return (
      order.Name?.toLowerCase().includes(keyword) ||
      order.phone?.toString().toLowerCase().includes(keyword) ||
      order.Status?.toLowerCase().includes(keyword) ||
      order.address?.toLowerCase().includes(keyword) ||
      order.products?.toLowerCase().includes(keyword)
    );
  });

  return (
    <main className="min-h-screen bg-[#FDFAF5] p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-amber-950">
              Order Admin Panel
            </h1>

            <p className="mt-1 text-sm text-amber-900/60">
              Google Sheet থেকে সব order এখানে দেখা যাবে।
            </p>
          </div>

          <Button
            onClick={loadOrders}
            disabled={loading}
            className="rounded-full bg-green-700 text-white hover:bg-green-800"
          >
            <RefreshCw className={`size-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <Card className="rounded-2xl border-amber-100">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="rounded-2xl bg-green-100 p-3">
                <PackageCheck className="size-6 text-green-700" />
              </div>

              <div>
                <p className="text-sm text-amber-900/60">Total Orders</p>
                <h2 className="text-2xl font-bold text-amber-950">
                  {orders.length}
                </h2>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-amber-100 md:col-span-2">
            <CardContent className="p-5">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-amber-900/40" />

                <Input
                  placeholder="Name, phone, product, address অথবা status দিয়ে search করুন..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-11 rounded-full pl-10"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="rounded-3xl border-amber-100 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-amber-950">Orders List</CardTitle>
          </CardHeader>

          <CardContent>
            {loading ? (
              <p className="py-10 text-center text-amber-900/60">
                Loading orders...
              </p>
            ) : filteredOrders.length === 0 ? (
              <p className="py-10 text-center text-amber-900/60">
                কোনো order পাওয়া যায়নি।
              </p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Products</TableHead>
                      <TableHead>deliveryCharge</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Address</TableHead>
                      <TableHead>Note</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {filteredOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="whitespace-nowrap text-sm">
                          {order.date
                            ? new Date(order.date).toLocaleString()
                            : "-"}
                        </TableCell>

                        <TableCell className="font-semibold text-amber-950">
                          {order.Name || "-"}
                        </TableCell>

                        <TableCell>{order.phone || "-"}</TableCell>

                        <TableCell className="min-w-[260px] text-sm text-amber-900/70">
                          {order.products || "-"}
                        </TableCell>
                        <TableCell className="font-bold text-green-700">
                          ৳{order.deliveryCharge || 0}
                        </TableCell>

                        <TableCell className="font-bold text-green-700">
                          ৳{order.total || 0}
                        </TableCell>

                        <TableCell>
                          <Select
                            value={order.Status || "Pending"}
                            disabled={updatingId === order.id}
                            onValueChange={(value) =>
                              updateStatus(order.id, value)
                            }
                          >
                            <SelectTrigger className="h-9 w-[150px] rounded-full border-amber-200">
                              <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                              {statuses.map((status) => (
                                <SelectItem key={status} value={status}>
                                  {status}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </TableCell>

                        <TableCell className="min-w-[220px] text-sm text-amber-900/70">
                          {order.address || "-"}
                        </TableCell>
                        <TableCell className="min-w-[200px] text-sm text-amber-900/70">
                          {order.note || "-"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
