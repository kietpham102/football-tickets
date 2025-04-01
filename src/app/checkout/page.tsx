'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate, formatTime, formatPrice } from '@/lib/utils';
import { useCart } from '@/lib/store';
import { createCheckoutSession } from '@/lib/stripe';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { X } from 'lucide-react';

export default function CheckoutPage() {
  const { items, removeFromCart, clearCart, totalPrice } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    if (items.length === 0) return;
    
    try {
      setIsLoading(true);
      // In a real app, this would create a Stripe checkout session
      // and redirect to Stripe's hosted checkout page
      const session = await createCheckoutSession(items);
      
      // For demo, we'll redirect to a success page with the mock session ID
      window.location.href = session.url;
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('There was an error processing your payment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-8">
      <div className="flex flex-col items-center text-center gap-4 mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
          Your Cart
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Review your tickets before checkout
        </p>
      </div>

      {items.length > 0 ? (
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <Card key={`${item.matchId}-${item.categoryId}`} className="overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative aspect-video w-full sm:w-48 flex-shrink-0">
                    <Image
                      src={item.match.imageUrl}
                      alt={`${item.match.teamA} vs ${item.match.teamB}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 192px"
                    />
                  </div>
                  
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {item.match.teamA} vs {item.match.teamB}
                        </h3>
                        <div className="text-sm text-muted-foreground">
                          {formatDate(item.match.date)} • {formatTime(item.match.date)}
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">
                          {item.match.stadium}, {item.match.location}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.matchId, item.categoryId)}
                        aria-label="Remove ticket"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="mt-2 space-y-1">
                      <div className="text-sm">
                        <span className="font-medium">{item.category.name}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Quantity: </span>
                        <span>{item.quantity}</span>
                      </div>
                      <div className="font-semibold">
                        {formatPrice(item.category.price)} × {item.quantity} = {formatPrice(item.category.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div>
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">Order Summary</h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={`${item.matchId}-${item.categoryId}-summary`} className="flex justify-between text-sm">
                        <div>
                          <div>{item.match.teamA} vs {item.match.teamB}</div>
                          <div className="text-muted-foreground">
                            {item.category.name} × {item.quantity}
                          </div>
                        </div>
                        <div className="font-medium">
                          {formatPrice(item.category.price * item.quantity)}
                        </div>
                      </div>
                    ))}
                    
                    <div className="border-t pt-4 flex justify-between font-bold">
                      <span>Total</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Button 
                    onClick={handleCheckout} 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Processing...' : 'Checkout with Stripe'}
                  </Button>
                  <Button variant="outline" onClick={clearCart} className="w-full" disabled={isLoading}>
                    Clear Cart
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Looks like you haven&apos;t added any tickets to your cart yet.
          </p>
          <Button asChild size="lg">
            <Link href="/">
              Browse Matches
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
} 