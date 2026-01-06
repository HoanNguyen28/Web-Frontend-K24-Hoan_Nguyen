interface Props {
  message?: string;
}

export default function FormSuccess({ message }: Props) {
  if (!message) return null;

  return (
    <p className="text-green-600 text-sm bg-green-50 border border-green-200 p-2 rounded">
      {message}
    </p>
  );
}
