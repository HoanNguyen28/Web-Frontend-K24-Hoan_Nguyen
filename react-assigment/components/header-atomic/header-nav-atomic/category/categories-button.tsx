
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CategoriesButton() {
  return (
    <Button className="flex items-center gap-3 bg-rose-600 rounded-t-lg hover:bg-rose-800 text-white px-6 h-full w-full justify-start cursor-pointer">
      <Menu className="h-6 w-6" />
      <span className="text-lg font-semibold">Categories</span>
    </Button>
  );
}
