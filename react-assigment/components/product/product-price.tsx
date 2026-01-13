export function ProductPrice({ price }: { price: number }) {
  return (
    <p className="text-base font-semibold text-gray-900">
      ${price.toFixed(2)}
    </p>
  );
}
