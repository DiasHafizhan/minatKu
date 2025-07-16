"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const credentialsAction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = form.email;
    const password = form.password;

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log(res);

      if (res.error != undefined) {
        // Navigasi ke dashboard atau halaman utama
        setErrorMsg("Email atau Password salah");
      } else {
        // Optional: tampilkan error
        router.push("/");
      }
    } catch (error) {
      setErrorMsg("Email atau Password salah");
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-center">Welcome Back!</CardTitle>
          <CardDescription className="text-center">
            Enter your email below to access your MinatKu account and continue
            your journey.
          </CardDescription>
          {errorMsg ? (
            <CardDescription className="bg-red-500 text-white w-full">
              {errorMsg}
            </CardDescription>
          ) : null}
        </CardHeader>
        <CardContent>
          <form onSubmit={credentialsAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/register" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
