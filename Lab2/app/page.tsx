"use client";

import { useState } from "react";
import LoginForm from "@/components/LoginForm/LoginForm";
import ProductList from "@/components/Product/ProductList";

export default function Page() {
  const [tab, setTab] = useState("login");

  return (
    <div className="h-screen flex flex-col items-center justify-start bg-gray-100 pt-20">

      {/* --- Tabs --- */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => setTab("login")}
          className={`px-5 py-2 rounded-lg border ${
            tab === "login" ? "bg-black text-white" : "bg-white"
          }`}
        >
          Login
        </button>

        <button
          onClick={() => setTab("product")}
          className={`px-5 py-2 rounded-lg border ${
            tab === "product" ? "bg-black text-white" : "bg-white"
          }`}
        >
          Product List
        </button>
      </div>

      {/* --- Render screens --- */}
      {tab === "login" ? <LoginForm /> : <ProductList />}
    </div>
  );
}
