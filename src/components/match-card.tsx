import Image from 'next/image';
import Link from 'next/link';
import { Match } from '@/data/matches';
import { formatDate, formatTime } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface MatchCardProps {
  match: Match;
}

export function MatchCard({ match }: MatchCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-lg hover:scale-[1.02] border-2">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={match.imageUrl}
          alt={`${match.teamA} vs ${match.teamB}`}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 w-full p-4 text-white">
          <h3 className="font-bold text-xl tracking-tight text-center">
            {match.teamA} vs {match.teamB}
          </h3>
        </div>
      </div>
      <CardHeader className="pb-2 text-center">
        <div className="flex justify-center items-center gap-6 mb-2">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {formatDate(match.date)}
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <Clock className="h-4 w-4" />
            {formatTime(match.date)}
          </div>
        </div>
        <div className="flex justify-center items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          {match.stadium}, {match.location}
        </div>
      </CardHeader>
      <CardContent className="pb-2 flex-grow text-center">
        <p className="text-sm line-clamp-3">
          {match.description}
        </p>
      </CardContent>
      <CardFooter className="pt-4">
        <Button asChild className="w-full">
          <Link href={`/match/${match.id}`}>
            View Tickets
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
} 