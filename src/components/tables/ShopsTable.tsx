"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";
import Image from "next/image";

interface Shop {
  id: string;
  user: {
    image: string;
    name: string;
    role: string;
  };
  storeName: string;
  isActive: boolean;
}

// Define the table data using the interface
const tableData: Shop[] = [
  {
    id: "58dsf456sa684s",
    user: {
      image: "/images/user/user-17.jpg",
      name: "Lindsey Curtis",
      role: "admin",
    },
    storeName: "Agency Website",
    isActive: true,
  },
  {
    id: "58dsf4562a684s",
    user: {
      image: "/images/user/user-18.jpg",
      name: "Lindsey Curtis",
      role: "admin",
    },
    storeName: "Agency Website",
    isActive: true,
  },
  {
    id: "58dsf456a6484s",
    user: {
      image: "/images/user/user-19.jpg",
      name: "Lindsey Curtis",
      role: "admin",
    },
    storeName: "Agency Website",
    isActive: true,
  },
  {
    id: "58dsf456a6844s",
    user: {
      image: "/images/user/user-20.jpg",
      name: "Lindsey Curtis",
      role: "admin",
    },
    storeName: "Agency Website",
    isActive: true,
  },
  {
    id: "58dsf456a6864s",
    user: {
      image: "/images/user/user-21.jpg",
      name: "Lindsey Curtis",
      role: "admin",
    },
    storeName: "Agency Website",
    isActive: true,
  },
  {
    id: "58ds3f456a684s",
    user: {
      image: "/images/user/user-22.jpg",
      name: "Lindsey Curtis",
      role: "admin",
    },
    storeName: "Agency Website",
    isActive: true,
  }
];

export default function ShopsTable() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  User
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Store Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((shop) => (
                <TableRow key={shop.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full">
                        <Image
                          width={40}
                          height={40}
                          src={shop.user.image}
                          alt={shop.user.name}
                        />
                      </div>
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {shop.user.name}
                        </span>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {shop.user.role}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {shop.storeName}
                  </TableCell>
                  {/* <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <div className="flex -space-x-2">
                      {order.team.images.map((teamImage, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                        >
                          <Image
                            width={24}
                            height={24}
                            src={teamImage}
                            alt={`Team member ${index + 1}`}
                            className="w-full"
                          />
                        </div>
                      ))}
                    </div>
                  </TableCell> */}
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        shop.isActive
                          ? "success"
                          : "error"
                      }
                    >
                      {shop.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  {/* <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {order.budget}
                  </TableCell> */}
                </TableRow>
              ))}
           
            </TableBody>
          </Table>
           {/* pagination */}
            {/* Pagination Controls */}
            <div className="flex justify-center items-center px-5 py-3 border-t border-gray-200 dark:border-white/[0.05]">
              <ul className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        currentPage === index + 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
