'use client';

import { useState } from 'react';
import matches from '@/data/matches';
import { MatchFilter } from '@/components/match-filter';
import { MatchCard } from '@/components/match-card';

export default function Home() {
  const [filteredMatches, setFilteredMatches] = useState(matches);

  return (
    <div className="container max-w-7xl mx-auto py-16 px-4 sm:px-6">
      <div className="flex flex-col items-center text-center gap-4 mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Upcoming Football Matches
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Browse and book tickets for the biggest matches across Europe
        </p>
      </div>

      <div className="max-w-2xl mx-auto w-full mb-10">
        <MatchFilter matches={matches} onFilter={setFilteredMatches} />
      </div>

      {filteredMatches.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8 max-w-6xl mx-auto">
          {filteredMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold mb-2">No matches found</h2>
          <p className="text-muted-foreground">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
}
