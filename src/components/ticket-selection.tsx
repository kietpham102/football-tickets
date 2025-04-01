'use client';

import { useState } from 'react';
import { Match, TicketCategory } from '@/data/matches';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/lib/store';
import { useRouter } from 'next/navigation';

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
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg">{category.name}</h3>
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