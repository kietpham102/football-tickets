export interface TicketCategory {
  id: string;
  name: string;
  price: number;
  description: string;
  available: number;
  imageUrl?: string; // Optional image for ticket categories
}

export interface Match {
  id: string;
  teamA: string;
  teamB: string;
  date: string;
  stadium: string;
  location: string;
  imageUrl: string;
  description: string;
  categories: TicketCategory[];
}

const matches: Match[] = [
  {
    id: 'm1',
    teamA: 'FC Barcelona',
    teamB: 'Real Madrid',
    date: '2025-10-20T19:00:00Z',
    stadium: 'Camp Nou',
    location: 'Barcelona, Spain',
    imageUrl: 'https://placehold.co/640x360/E2E8F0/AAAAAA/png?text=Camp+Nou',
    description: 'El Clásico - The biggest rivalry in Spanish football. FC Barcelona takes on Real Madrid in a match that will determine the league leader.',
    categories: [
      {
        id: 'cat1',
        name: 'Category 1 - Premium',
        price: 250,
        description: 'Best seats in the stadium with perfect view of the action',
        available: 85,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+1'
      },
      {
        id: 'cat2',
        name: 'Category 2',
        price: 150,
        description: 'Great seats with excellent view of the field',
        available: 120,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+2'
      },
      {
        id: 'cat3',
        name: 'Category 3',
        price: 90,
        description: 'Good seats with decent view of the action',
        available: 200,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+3'
      },
      {
        id: 'vip1',
        name: 'VIP Box',
        price: 500,
        description: 'Exclusive VIP experience with catering and private seating',
        available: 25,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=VIP'
      }
    ]
  },
  {
    id: 'm2',
    teamA: 'Manchester United',
    teamB: 'Liverpool',
    date: '2025-11-05T20:00:00Z',
    stadium: 'Old Trafford',
    location: 'Manchester, UK',
    imageUrl: 'https://placehold.co/640x360/E2E8F0/AAAAAA/png?text=Old+Trafford',
    description: 'The North-West derby between two of England\'s most successful clubs. A fierce rivalry that dates back over a century.',
    categories: [
      {
        id: 'cat1',
        name: 'Category 1 - Premium',
        price: 220,
        description: 'Best seats in the stadium with perfect view of the action',
        available: 65,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+1'
      },
      {
        id: 'cat2',
        name: 'Category 2',
        price: 140,
        description: 'Great seats with excellent view of the field',
        available: 110,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+2'
      },
      {
        id: 'cat3',
        name: 'Category 3',
        price: 85,
        description: 'Good seats with decent view of the action',
        available: 180,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+3'
      },
      {
        id: 'vip1',
        name: 'VIP Box',
        price: 450,
        description: 'Exclusive VIP experience with catering and private seating',
        available: 20,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=VIP'
      }
    ]
  },
  {
    id: 'm3',
    teamA: 'Bayern Munich',
    teamB: 'Borussia Dortmund',
    date: '2025-11-15T18:30:00Z',
    stadium: 'Allianz Arena',
    location: 'Munich, Germany',
    imageUrl: 'https://placehold.co/640x360/E2E8F0/AAAAAA/png?text=Allianz+Arena',
    description: 'Der Klassiker - Germany\'s biggest football rivalry between Bayern Munich and Borussia Dortmund.',
    categories: [
      {
        id: 'cat1',
        name: 'Category 1 - Premium',
        price: 180,
        description: 'Best seats in the stadium with perfect view of the action',
        available: 95,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+1'
      },
      {
        id: 'cat2',
        name: 'Category 2',
        price: 120,
        description: 'Great seats with excellent view of the field',
        available: 150,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+2'
      },
      {
        id: 'cat3',
        name: 'Category 3',
        price: 75,
        description: 'Good seats with decent view of the action',
        available: 230,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+3'
      },
      {
        id: 'vip1',
        name: 'VIP Box',
        price: 350,
        description: 'Exclusive VIP experience with catering and private seating',
        available: 30,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=VIP'
      }
    ]
  },
  {
    id: 'm4',
    teamA: 'Paris Saint-Germain',
    teamB: 'Marseille',
    date: '2025-11-23T20:45:00Z',
    stadium: 'Parc des Princes',
    location: 'Paris, France',
    imageUrl: 'https://placehold.co/640x360/E2E8F0/AAAAAA/png?text=Parc+des+Princes',
    description: 'Le Classique - The fierce rivalry between Paris Saint-Germain and Olympique de Marseille, two of France\'s most popular clubs.',
    categories: [
      {
        id: 'cat1',
        name: 'Category 1 - Premium',
        price: 190,
        description: 'Best seats in the stadium with perfect view of the action',
        available: 80,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+1'
      },
      {
        id: 'cat2',
        name: 'Category 2',
        price: 130,
        description: 'Great seats with excellent view of the field',
        available: 120,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+2'
      },
      {
        id: 'cat3',
        name: 'Category 3',
        price: 80,
        description: 'Good seats with decent view of the action',
        available: 210,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+3'
      },
      {
        id: 'vip1',
        name: 'VIP Box',
        price: 380,
        description: 'Exclusive VIP experience with catering and private seating',
        available: 25,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=VIP'
      }
    ]
  },
  {
    id: 'm5',
    teamA: 'Juventus',
    teamB: 'AC Milan',
    date: '2025-12-05T20:45:00Z',
    stadium: 'Allianz Stadium',
    location: 'Turin, Italy',
    imageUrl: 'https://placehold.co/640x360/E2E8F0/AAAAAA/png?text=Allianz+Stadium',
    description: 'A classic Serie A matchup between two of Italy\'s most decorated clubs with a combined 50+ domestic league titles.',
    categories: [
      {
        id: 'cat1',
        name: 'Category 1 - Premium',
        price: 175,
        description: 'Best seats in the stadium with perfect view of the action',
        available: 75,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+1'
      },
      {
        id: 'cat2',
        name: 'Category 2',
        price: 115,
        description: 'Great seats with excellent view of the field',
        available: 115,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+2'
      },
      {
        id: 'cat3',
        name: 'Category 3',
        price: 70,
        description: 'Good seats with decent view of the action',
        available: 195,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+3'
      },
      {
        id: 'vip1',
        name: 'VIP Box',
        price: 300,
        description: 'Exclusive VIP experience with catering and private seating',
        available: 20,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=VIP'
      }
    ]
  },
  {
    id: 'm6',
    teamA: 'Arsenal',
    teamB: 'Tottenham Hotspur',
    date: '2025-12-12T17:30:00Z',
    stadium: 'Emirates Stadium',
    location: 'London, UK',
    imageUrl: 'https://placehold.co/640x360/E2E8F0/AAAAAA/png?text=Emirates+Stadium',
    description: 'The North London Derby - One of the fiercest local rivalries in English football between Arsenal and Tottenham Hotspur.',
    categories: [
      {
        id: 'cat1',
        name: 'Category 1 - Premium',
        price: 200,
        description: 'Best seats in the stadium with perfect view of the action',
        available: 60,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+1'
      },
      {
        id: 'cat2',
        name: 'Category 2',
        price: 140,
        description: 'Great seats with excellent view of the field',
        available: 100,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+2'
      },
      {
        id: 'cat3',
        name: 'Category 3',
        price: 85,
        description: 'Good seats with decent view of the action',
        available: 180,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=Cat+3'
      },
      {
        id: 'vip1',
        name: 'VIP Box',
        price: 380,
        description: 'Exclusive VIP experience with catering and private seating',
        available: 20,
        imageUrl: 'https://placehold.co/400x300/E2E8F0/AAAAAA/png?text=VIP'
      }
    ]
  }
];

export default matches; 