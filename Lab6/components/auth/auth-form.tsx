"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

interface AuthFormProps {
  title: string;
  description: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}

export default function AuthForm({
  title,
  description,
  children,
  footer,
}: AuthFormProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[700px] shadow-md p-4 -translate-y-24">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 mt-4">
          {children}
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          {footer}
        </CardFooter>
      </Card>
    </div>
  );
}
