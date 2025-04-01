import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatDate, formatTime } from '@/lib/utils';
import matches from '@/data/matches';
import { TicketSelection } from '@/components/ticket-selection';
import { Button } from '@/components/ui/button';

interface MatchDetailPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return matches.map((match) => ({
    id: match.id,
  }));
}

export function generateMetadata({ params }: MatchDetailPageProps): Metadata {
  const match = matches.find((m) => m.id === params.id);
  
  if (!match) {
    return {
      title: 'Match Not Found',
    };
  }
  
  return {
    title: `${match.teamA} vs ${match.teamB} | Football Tickets`,
    description: match.description,
  };
}

export default function MatchDetailPage({ params }: MatchDetailPageProps) {
  const match = matches.find((m) => m.id === params.id);
  
  if (!match) {
    notFound();
  }
  
  return (
    <div className="container py-8">
      <Button asChild variant="outline" className="mb-6">
        <Link href="/" className="flex items-center">
          <span>← Back to matches</span>
        </Link>
      </Button>
      
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
            <Image
              src={match.imageUrl}
              alt={`${match.teamA} vs ${match.teamB}`}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{match.teamA} vs {match.teamB}</h1>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-muted-foreground">
              <div className="flex items-center gap-1">
                <span>{formatDate(match.date)}</span>
                <span className="mx-1">•</span>
                <span>{formatTime(match.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>{match.stadium}</span>
                <span className="mx-1">•</span>
                <span>{match.location}</span>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Match Information</h2>
            <p className="text-muted-foreground">{match.description}</p>
          </div>
        </div>
        
        <div>
          <div className="sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Available Tickets</h2>
            <div className="space-y-4">
              {match.categories.map((category) => (
                <TicketSelection 
                  key={category.id} 
                  match={match} 
                  category={category} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 