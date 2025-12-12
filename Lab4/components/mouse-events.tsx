"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function MouseEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise 3: Handling Mouse Events</CardTitle>
        <CardDescription>
        Di chuột vào box bên dưới để thay đổi màu nền
        </CardDescription>
      </CardHeader>

      <CardContent>
         <div
      className="
        w-40 h-40 
        bg-blue-500  hover:bg-red-500 
        transition-colors duration-300 
        rounded-lg 
        flex justify-center items-center 
        text-sm font-semibold
        text-white
        
      "
    >
      Hover Me!
    </div>
      </CardContent>

    </Card>
  );
}