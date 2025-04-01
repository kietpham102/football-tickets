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
  const id = params.id;
  const match = matches.find((m) => m.id === id);
  
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
  const id = params.id;
  const match = matches.find((m) => m.id === id);
  
  if (!match) {
    notFound();
  }
  
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/" className="flex items-center">
          <span>← Back to matches</span>
        </Link>
      </Button>
      
      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div>
          <div className="relative aspect-video mb-8 overflow-hidden rounded-xl shadow-lg">
            <Image
              src={match.imageUrl}
              alt={`${match.teamA} vs ${match.teamB}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <h1 className="text-3xl font-bold mb-2">{match.teamA} vs {match.teamB}</h1>
            </div>
          </div>
          
          <div className="mb-6 flex flex-col md:flex-row md:justify-between items-center bg-gray-50 p-4 rounded-lg border">
            <div className="flex items-center gap-4 text-muted-foreground mb-4 md:mb-0">
              <div>{formatDate(match.date)}</div>
              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
              <div>{formatTime(match.date)}</div>
            </div>
            <div className="text-muted-foreground">
              {match.stadium}, {match.location}
            </div>
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">Match Information</h2>
            <p className="text-muted-foreground text-lg">{match.description}</p>
          </div>
        </div>
        
        <div>
          <div className="sticky top-24 bg-gray-50 p-6 rounded-xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-center">
              Available Tickets
            </h2>
            <div className="space-y-6">
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