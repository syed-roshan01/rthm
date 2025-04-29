"use client"; // Add the use client directive at the top of the file

import { metadata } from "./metadata"; // Import metadata
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation"; // Import usePathname to access the current route
import "./globals.css"; // Assuming global styles are required

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current path

  // Check for admin pages to hide navbar
  const isAdminPage =
    pathname === "/admin-login" || pathname === "/dashboard"; // Add more admin pages as needed

  return (
    <html lang="en">
      <head>
        {/* Set the metadata in the head */}
        <meta name="description" content={metadata.description} />
        <meta name="title" content={metadata.title} />
      </head>
      <body>
        {/* Conditionally render Navbar */}
        {!isAdminPage && <Navbar />}
        {children}
      </body>
    </html>
  );
}
