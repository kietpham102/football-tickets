import { CartItem } from './store';

// Interface for ticket purchase history
export interface TicketPurchase {
  id: string;
  purchaseDate: string;
  items: CartItem[];
  totalAmount: number;
  sessionId: string;
}

// Storage key for local storage
const STORAGE_KEY = 'football-tickets-history';

// Get ticket history from local storage
export function getTicketHistory(): TicketPurchase[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const historyJson = localStorage.getItem(STORAGE_KEY);
    if (!historyJson) return [];
    return JSON.parse(historyJson);
  } catch (error) {
    console.error('Failed to parse ticket history from localStorage:', error);
    return [];
  }
}

// Add new purchase to history
export function addPurchaseToHistory(items: CartItem[], sessionId: string): TicketPurchase {
  const purchase: TicketPurchase = {
    id: `purchase_${Date.now()}`,
    purchaseDate: new Date().toISOString(),
    items,
    totalAmount: items.reduce((sum, item) => sum + (item.category.price * item.quantity), 0),
    sessionId
  };
  
  if (typeof window === 'undefined') return purchase;
  
  try {
    const history = getTicketHistory();
    const updatedHistory = [purchase, ...history];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
  } catch (error) {
    console.error('Failed to save ticket purchase to localStorage:', error);
  }
  
  return purchase;
}

// Clear ticket history (useful for testing)
export function clearTicketHistory(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
} 