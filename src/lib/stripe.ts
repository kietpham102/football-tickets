import { loadStripe, Stripe } from '@stripe/stripe-js';
import { CartItem } from './store';

// Replace with your own Stripe publishable key
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_key_here';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(stripePublishableKey);
  }
  return stripePromise;
};

export type CheckoutSession = {
  id: string;
  amount: number;
  status: string;
  url: string;
};

// Function to create a checkout session
export async function createCheckoutSession(items: CartItem[]): Promise<CheckoutSession> {
  try {
    // In a real application, this would be a server API call to Stripe's API
    // For demo purposes, we'll create a mock session
    
    // This would normally be sent to the server and would include formatted date
    // in the description

    // Mock session ID for demo
    const sessionId = `cs_test_${Math.random().toString(36).substring(2, 15)}`;
    
    // Calculate total (this would normally come from Stripe)
    const totalAmount = items.reduce(
      (sum, item) => sum + (item.category.price * item.quantity), 
      0
    );

    // Since this is a demo, we'll return a mock checkout session
    return {
      id: sessionId,
      amount: totalAmount,
      status: 'created',
      url: `/checkout/success?session_id=${sessionId}`,
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw new Error('Failed to create checkout session');
  }
} 