import Image from 'next/image';
import Link from 'next/link';
import { Match } from '@/data/matches';
import { formatDate, formatTime } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MatchCardProps {
  match: Match;
}

export function MatchCard({ match }: MatchCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-lg">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={match.imageUrl}
          alt={`${match.teamA} vs ${match.teamB}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-muted-foreground">
            {formatDate(match.date)}
          </div>
          <div className="text-sm font-medium">
            {formatTime(match.date)}
          </div>
        </div>
        <h3 className="font-bold text-xl tracking-tight">
          {match.teamA} vs {match.teamB}
        </h3>
        <p className="text-sm text-muted-foreground">{match.stadium}, {match.location}</p>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-sm line-clamp-3">
          {match.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/match/${match.id}`}>
            View Tickets
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
} 