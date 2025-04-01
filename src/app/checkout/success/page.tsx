'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/store';
import { addPurchaseToHistory } from '@/lib/ticketHistory';

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { items, clearCart } = useCart();
  const [saved, setSaved] = useState(false);
  
  useEffect(() => {
    if (!saved && sessionId && items.length > 0) {
      // Save purchase to ticket history
      addPurchaseToHistory(items, sessionId);
      setSaved(true);
      
      // Clear the cart after successful checkout
      clearCart();
    }
  }, [clearCart, items, sessionId, saved]);

  return (
    <div className="container max-w-md py-16">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Payment Successful!</h1>
          <p className="text-muted-foreground">
            Thank you for your purchase. Your order has been processed successfully.
          </p>
        </div>
        
        {sessionId && (
          <div className="w-full bg-muted p-4 rounded-md text-sm">
            <p>Session ID: <span className="font-mono">{sessionId}</span></p>
            <p className="text-xs text-muted-foreground mt-1">
              Your tickets are now available in your account.
            </p>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-3 w-full mt-4">
          <Button asChild className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Link href="/account">
              View My Tickets
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <Link href="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 