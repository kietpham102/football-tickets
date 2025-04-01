'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate, formatTime, formatPrice } from '@/lib/utils';
import { getTicketHistory, TicketPurchase } from '@/lib/ticketHistory';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ticket, Calendar, MapPin, Clock } from 'lucide-react';

export function TicketHistory() {
  const [ticketHistory, setTicketHistory] = useState<TicketPurchase[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load ticket history from local storage
    const history = getTicketHistory();
    setTicketHistory(history);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div className="text-center py-8">Loading your tickets...</div>;
  }

  if (ticketHistory.length === 0) {
    return (
      <div className="p-6 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">My Tickets</h2>
        <p className="text-muted-foreground mb-4">
          You haven&apos;t purchased any tickets yet. Browse upcoming matches to find tickets!
        </p>
        <Button asChild>
          <Link href="/">Browse Matches</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">My Tickets</h2>
      <div className="space-y-6">
        {ticketHistory.map((purchase) => (
          <Card key={purchase.id} className="overflow-hidden">
            <CardHeader className="bg-muted/50">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Order #{purchase.id.split('_')[1].substring(0, 8)}</CardTitle>
                  <CardDescription>
                    {new Date(purchase.purchaseDate).toLocaleDateString()} • {formatPrice(purchase.totalAmount)}
                  </CardDescription>
                </div>
                <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                  Confirmed
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {purchase.items.map((item) => (
                  <div key={`${item.matchId}-${item.categoryId}`} className="p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative w-full md:w-32 h-24 flex-shrink-0">
                        <Image
                          src={item.match.imageUrl}
                          alt={`${item.match.teamA} vs ${item.match.teamB}`}
                          fill
                          className="object-cover rounded-md"
                          sizes="(max-width: 768px) 100vw, 128px"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold flex items-center gap-2">
                          <Ticket className="h-4 w-4" />
                          {item.match.teamA} vs {item.match.teamB}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(item.match.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {formatTime(item.match.date)}
                          </div>
                          <div className="flex items-center gap-1 md:col-span-2">
                            <MapPin className="h-3 w-3" />
                            {item.match.stadium}, {item.match.location}
                          </div>
                        </div>
                        <div className="mt-2 p-2 rounded bg-muted/50 inline-block text-sm">
                          {item.category.name} • {item.quantity} {item.quantity === 1 ? 'ticket' : 'tickets'} • {formatPrice(item.category.price * item.quantity)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="bg-muted/30 flex justify-between py-3">
              <div className="text-sm text-muted-foreground">
                <span>Session ID: </span>
                <span className="font-mono">{purchase.sessionId.substring(0, 16)}...</span>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href={`/match/${purchase.items[0].matchId}`}>
                  View Match
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
} 