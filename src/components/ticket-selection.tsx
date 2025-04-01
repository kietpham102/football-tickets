'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Match, TicketCategory } from '@/data/matches';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Ticket } from 'lucide-react';

interface TicketSelectionProps {
  match: Match;
  category: TicketCategory;
}

export function TicketSelection({ match, category }: TicketSelectionProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(match, category, quantity);
    router.push('/checkout');
  };

  const availableQuantities = Array.from(
    { length: Math.min(10, category.available) }, 
    (_, i) => i + 1
  );

  return (
    <div className="flex flex-col p-4 border rounded-lg bg-card transition-all hover:shadow-md">
      {category.imageUrl && (
        <div className="relative h-48 mb-4 -mx-4 -mt-4 overflow-hidden rounded-t-lg">
          <Image
            src={category.imageUrl || match.imageUrl}
            alt={category.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
          <div className="absolute bottom-0 left-0 w-full p-3">
            <Badge variant="outline" className="bg-black/50 text-white border-none">
              {category.name}
            </Badge>
          </div>
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg flex items-center">
            <Ticket className="h-4 w-4 mr-2" />
            {category.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-2">{category.description}</p>
          <div className="text-sm">
            <span className="text-muted-foreground">Available: </span>
            <span className="font-medium">{category.available}</span>
          </div>
        </div>
        <div className="text-lg font-bold">{formatPrice(category.price)}</div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center mt-auto">
        <div className="flex-grow sm:max-w-[120px]">
          <Select 
            value={quantity.toString()} 
            onValueChange={(value) => setQuantity(parseInt(value))}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Quantity" />
            </SelectTrigger>
            <SelectContent>
              {availableQuantities.map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? 'ticket' : 'tickets'}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex-grow">
          <Button onClick={handleAddToCart} className="w-full">
            Add to Cart - {formatPrice(category.price * quantity)}
          </Button>
        </div>
      </div>
    </div>
  );
} 