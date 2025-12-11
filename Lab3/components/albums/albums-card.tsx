"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AlbumCardProps {
  title: string;
  image: string;
}

export default function AlbumCard({ title, image }: AlbumCardProps) {
  return (
    <Card className="w-full shadow-md hover:shadow-lg transition">
      <CardHeader className="p-2">
        <CardTitle className="text-lg text-center">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex justify-center p-2">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="rounded-lg object-cover"
        />
      </CardContent>
    </Card>
  );
}
