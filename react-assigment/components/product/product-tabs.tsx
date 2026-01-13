'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductTabId } from '@/hooks/usememo-tabs-product';


interface ProductTabsProps {
  value: ProductTabId;
  onChange: (value: ProductTabId) => void;
}

const tabs: { id: ProductTabId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'popular', label: 'Popular' },
  { id: 'sale', label: 'On Sale' },
  { id: 'rated', label: 'Best Rated' },
];

export function ProductTabs({ value, onChange }: ProductTabsProps) {
  return (
    <Tabs
      value={value}
      onValueChange={(v) => onChange(v as ProductTabId)}
    >
      <TabsList className="bg-transparent p-0 gap-2 shadow-none ">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className="
               px-4 py-2 text-sm font-medium
              transition text-black font-bold
             cursor-pointer
              data-[state=active]:text-red-600
            "
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
