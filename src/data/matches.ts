export interface TicketCategory {
  id: string;
  name: string;
  price: number;
  description: string;
  available: number;
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
    imageUrl: '/images/barcelona-realmadrid.jpg',
    description: 'El Clásico - The biggest rivalry in Spanish football. FC Barcelona takes on Real Madrid in a match that will determine the league leader.',
    categories: [
      {
        id: 'cat1',
        name: 'Category 1 - Premium',
        price: 250,
        description: 'Best seats in the stadium with perfect view of the action',
        available: 85,
      },
      {
        id: 'cat2',
        name: 'Category 2',
        price: 150,
        description: 'Great seats with excellent view of the field',
        available: 120,
      },
      {
        id: 'cat3',
        name: 'Category 3',
        price: 90,
        description: 'Good seats with decent view of the action',
        available: 200,
      },
      {
        id: 'vip1',
        name: 'VIP Box',
        price: 500,
        description: 'Exclusive VIP experience with catering and private seating',
        available: 25,
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
    imageUrl: '/images/man-liverpool.jpg',
    description: 'The North-West derby between two of England\'s most successful clubs. A fierce rivalry that dates back over a century.',
    categories: [
      {
        id: 'cat1',
        name: 'Category 1 - Premium',
        price: 220,
        description: 'Best seats in the stadium with perfect view of the action',
        available: 65,
      },
      {
        id: 'cat2',
        name: 'Category 2',
        price: 140,
        description: 'Great seats with excellent view of the field',
        available: 110,
      },
      {
        id: 'cat3',
        name: 'Category 3',
        price: 85,
        description: 'Good seats with decent view of the action',
        available: 180,
      },
      {
        id: 'vip1',
        name: 'VIP Box',
        price: 450,
        description: 'Exclusive VIP experience with catering and private seating',
        available: 20,
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
    imageUrl: '/images/bayern-dortmund.jpg',
    description: 'Der Klassiker - Germany\'s biggest football rivalry between Bayern Munich and Borussia Dortmund.',
    categories: [
      {
        id: 'cat1',
        name: 'Category 1 - Premium',
        price: 180,
        description: 'Best seats in the stadium with perfect view of the action',
        available: 95,
      },
      {
        id: 'cat2',
        name: 'Category 2',
        price: 120,
        description: 'Great seats with excellent view of the field',
        available: 150,
      },
      {
        id: 'cat3',
        name: 'Category 3',
        price: 75,
        description: 'Good seats with decent view of the action',
        available: 230,
      },
      {
        id: 'vip1',
        name: 'VIP Box',
        price: 350,
        description: 'Exclusive VIP experience with catering and private seating',
        available: 30,
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
    imageUrl: '/images/psg-marseille.jpg',
    description: 'Le Classique - The fierce rivalry between Paris Saint-Germain and Olympique de Marseille, two of France\'s most popular clubs.',
    categories: [
      {
        id: 'cat1',
        name: 'Category 1 - Premium',
        price: 190,
        description: 'Best seats in the stadium with perfect view of the action',
        available: 80,
      },
      {
        id: 'cat2',
        name: 'Category 2',
        price: 130,
        description: 'Great seats with excellent view of the field',
        available: 120,
      },
      {
        id: 'cat3',
        name: 'Category 3',
        price: 80,
        description: 'Good seats with decent view of the action',
        available: 210,
      },
      {
        id: 'vip1',
        name: 'VIP Box',
        price: 380,
        description: 'Exclusive VIP experience with catering and private seating',
        available: 25,
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
    imageUrl: '/images/juventus-milan.jpg',
    description: 'A classic Serie A matchup between two of Italy\'s most decorated clubs with a combined 50+ domestic league titles.',
    categories: [
      {
        id: 'cat1',
        name: 'Category 1 - Premium',
        price: 175,
        description: 'Best seats in the stadium with perfect view of the action',
        available: 75,
      },
      {
        id: 'cat2',
        name: 'Category 2',
        price: 115,
        description: 'Great seats with excellent view of the field',
        available: 115,
      },
      {
        id: 'cat3',
        name: 'Category 3',
        price: 70,
        description: 'Good seats with decent view of the action',
        available: 195,
      },
      {
        id: 'vip1',
        name: 'VIP Box',
        price: 300,
        description: 'Exclusive VIP experience with catering and private seating',
        available: 20,
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
    imageUrl: '/images/arsenal-tottenham.jpg',
    description: 'The North London Derby - One of the fiercest local rivalries in English football between Arsenal and Tottenham Hotspur.',
    categories: [
      {
        id: 'cat1',
        name: 'Category 1 - Premium',
        price: 200,
        description: 'Best seats in the stadium with perfect view of the action',
        available: 60,
      },
      {
        id: 'cat2',
        name: 'Category 2',
        price: 140,
        description: 'Great seats with excellent view of the field',
        available: 100,
      },
      {
        id: 'cat3',
        name: 'Category 3',
        price: 85,
        description: 'Good seats with decent view of the action',
        available: 180,
      },
      {
        id: 'vip1',
        name: 'VIP Box',
        price: 380,
        description: 'Exclusive VIP experience with catering and private seating',
        available: 20,
      }
    ]
  }
];

export default matches; 