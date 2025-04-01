'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Match } from '@/data/matches';
import { Button } from './ui/button';
import { Search, X } from 'lucide-react';

interface MatchFilterProps {
  onFilter: (matches: Match[]) => void;
  matches: Match[];
}

export function MatchFilter({ onFilter, matches }: MatchFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    const filteredMatches = matches.filter((match) => {
      const searchString = `${match.teamA} ${match.teamB} ${match.stadium} ${match.location}`.toLowerCase();
      return searchString.includes(value.toLowerCase());
    });
    
    onFilter(filteredMatches);
  };

  const clearSearch = () => {
    setSearchTerm('');
    onFilter(matches);
  };

  return (
    <div className="mb-8">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search matches, teams or locations..."
            className="pl-10 w-full"
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchTerm && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-10 w-10"
              onClick={clearSearch}
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
} 