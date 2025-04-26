"use client";

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import CreateShopDialog from "@/components/dialogs/create-shop-dialog";
import ShopsTable from "@/components/tables/ShopsTable";
import React, { useEffect, useState } from "react";

// //meta data
// export const metadata = {
//   title: "Shops",
//   description: "List of shops",
// };

export default function BasicTables() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "Shops - Admin Dashboard"; // Set the title dynamically
  }, []);

  return (
    <div>
      <PageBreadcrumb pageTitle="List of shops" />
      <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold"></h2>
            <button onClick={() => setOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Create Shop
            </button>
          </div>
          <ShopsTable />
          <CreateShopDialog open={open} onClose={function (): void {
          setOpen(false);
        } } onSubmit={function (formData: { name: string; phone: string; password: string; email: string; storeName?: string; }): void {
          throw new Error("Function not implemented.");
        } } />
      </div>
    </div>
  );
}
