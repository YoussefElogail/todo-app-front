"use client";

import Footer from "../_components/Footer";
import Header from "../_components/Header";
import UserProvider from "../_contexts/UserContext";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <Header />
      <main className="container  mx-auto h-[calc(100vh-120px)] p-4">
        {children}
      </main>
      <Footer />
    </UserProvider>
  );
}
