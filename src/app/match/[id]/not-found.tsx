import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MatchNotFound() {
  return (
    <div className="container py-20 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Match Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Sorry, we couldn&apos;t find the match you&apos;re looking for. It may have been removed or the URL is incorrect.
      </p>
      <Button asChild size="lg">
        <Link href="/">
          Return to Home
        </Link>
      </Button>
    </div>
  );
}
