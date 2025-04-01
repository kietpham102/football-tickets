'use client';

import { useState } from 'react';
import matches from '@/data/matches';
import { MatchFilter } from '@/components/match-filter';
import { MatchCard } from '@/components/match-card';

export default function Home() {
  const [filteredMatches, setFilteredMatches] = useState(matches);

  return (
    <div className="container py-8">
      <div className="flex flex-col items-start gap-4 mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
          Upcoming Football Matches
        </h1>
        <p className="text-xl text-muted-foreground">
          Browse and book tickets for the biggest matches across Europe
        </p>
      </div>

      <MatchFilter matches={matches} onFilter={setFilteredMatches} />

      {filteredMatches.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold mb-2">No matches found</h2>
          <p className="text-muted-foreground">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
}
