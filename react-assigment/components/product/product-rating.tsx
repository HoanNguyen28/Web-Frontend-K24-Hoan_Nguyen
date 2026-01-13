import { Star } from 'lucide-react';

export function ProductRating({ value = 5 }: { value?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: value }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}
    </div>
  );
}
