"use client"

import { RegisterForm } from "@/components/Fragments/RegisterForm";

export default function Register() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
}
