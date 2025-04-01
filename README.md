# Football Tickets Demo

A demo front-end application for browsing and selecting football match tickets. This project showcases proficiency in React, Next.js, TypeScript, and modern front-end best practices.

## Project Overview

This application allows users to:
- Browse upcoming football matches
- Filter matches by search terms
- View detailed information about each match
- Select ticket categories and quantities
- Add tickets to a cart
- Review cart and proceed to checkout

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **UI/Styling**: Tailwind CSS + Shadcn/ui
- **State Management**: React Context API
- **Image Optimization**: Next.js Image component

## Technical Features

- **Server-Side Generation (SSG)** for match listing and detail pages
- **Optimized Images** using Next.js Image component for better performance
- **Responsive Design** that works well on mobile, tablet, and desktop
- **Accessibility** features including proper semantic HTML and ARIA labels
- **Clean Component Structure** with reusable UI components
- **Client-side Filtering** for quick match search

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/football-tickets.git
cd football-tickets
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: App Router pages including home, match details, and checkout
- `src/components`: Reusable UI components
- `src/components/ui`: Shadcn UI components
- `src/data`: Mock data for matches and tickets
- `src/lib`: Utilities, hooks, and store (cart context)
- `public/images`: Images for football matches

## Notes

This is a demo project and doesn't include real payment processing or backend integration. It's designed to showcase front-end development skills and modern React/Next.js patterns.
