import { Phone, MapPin } from 'lucide-react';

export function NavContact() {
  return (
    <div className="ml-auto flex items-center gap-6 text-sm">
      <div className="flex items-center gap-2">
        <Phone className="h-4 w-4" />
        <span>1900 292958</span>
      </div>
      
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4" />
        <span>Find Store</span>
      </div>
    </div>
  );
}