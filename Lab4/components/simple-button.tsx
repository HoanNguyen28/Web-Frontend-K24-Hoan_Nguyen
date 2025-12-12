"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function SimpleButtonCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise 1: Simple Button Click</CardTitle>
        <CardDescription>
        Click vào button bên dưới để hiển thị thông báo alert
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Button onClick={() => alert("bạn đã click vào button!")}>
          Click Me
        </Button>
      </CardContent>

    </Card>
  );
}