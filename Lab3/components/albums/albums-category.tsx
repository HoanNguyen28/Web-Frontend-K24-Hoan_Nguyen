"use client";

type Item = {
  name: string;
  image: string;
  price: number;
  rating: number;
};

export default function AlbumCategory({
  title,
  items,
}: {
  title: string;
  items: Item[];
}) {
  return (
    <div className="p-4 border rounded-lg space-y-3 bg-white shadow-sm">
      <h2 className="text-lg font-semibold">{title}</h2>

      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="border rounded-lg p-3 shadow-sm bg-gray-50 hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover rounded"
            />

            <div className="mt-2 font-semibold">{item.name}</div>

            <div className="text-yellow-500">
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>

            <div className="text-red-600 font-bold">
              {item.price.toLocaleString()} đ
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
