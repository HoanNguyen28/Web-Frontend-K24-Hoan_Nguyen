"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail,UserRound , Lock, KeyRound, ChevronRight } from "lucide-react";

export default function LoginForm() {
  return (
    <div className="w-full flex justify-center bg-">
      <Card className="w-[700px] shadow-md p-6 ">
        {/* Header */}
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="bg-stone-50 text-red-600 p-3 bg w-12 h-12 rounded-sm">
              <Lock size={20} />
            </div>
            <div className="space-y-2">
              <CardTitle className="text-xl font-semibold ">Login Here</CardTitle>
              <CardDescription>
                Your personal data will be used to support your experience throughout this website.
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        {/* Form */}
        <CardContent className="space-y-4 mt-4">

          {/* Username */}
          <div>
            <div className="relative mt-1">
              <UserRound className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <Input placeholder="Email/Username" className="pl-10"autoComplete="off"  />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="relative mt-1">
              <KeyRound className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <Input placeholder="Password" type="password" className="pl-10" autoComplete="off" />
            </div>
          </div>

          {/* Remember me + Forget password */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" />
              <Label htmlFor="remember" className="text-gray-600">
                Remember me
              </Label>
            </div>

            <a href="#" className="text-gray-950 hover:underline">
              Forget Password
            </a>
          </div>
        </CardContent>

        {/* Button */}
        <CardFooter>
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-medium">
            Login Now
            <ChevronRight className="ml-2" size={20} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
