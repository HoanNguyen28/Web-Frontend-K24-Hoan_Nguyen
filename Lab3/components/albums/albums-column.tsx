"use client";

import AlbumCard from "./albums-card";

interface Album {
  id: number;
  title: string;
  image: string;
}

const demoAlbums: Album[] = [
  { id: 1, title: "Travel Memories", image: "/images/1.jpg" },
  { id: 2, title: "My Pets", image: "/images/2.jpg" },
  { id: 3, title: "Family Album", image: "/images/3.jpg" },
  { id: 4, title: "Work Photos", image: "/images/4.jpg" },
  { id: 5, title: "Wallpapers", image: "/images/5.jpg" },
  { id: 6, title: "Random Shots", image: "/images/6.jpg" },
];

export default function AlbumColumn() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {demoAlbums.map(album => (
        <AlbumCard key={album.id} title={album.title} image={album.image} />
      ))}
    </div>
  );
}
