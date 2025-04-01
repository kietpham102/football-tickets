import { UserProfile } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { TicketHistory } from "@/components/ticket-history";

export const metadata: Metadata = {
  title: "My Account - Football Tickets",
  description: "Manage your account and view your tickets",
};

export default async function AccountPage() {
  const user = await currentUser();
  
  if (!user) {
    redirect("/sign-in");
  }
  
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6">
      <div className="flex flex-col items-center text-center gap-4 mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
          My Account
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Manage your profile and view your tickets
        </p>
      </div>
      
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Profile Settings</h2>
          <div className="bg-white rounded-lg shadow-sm">
            <UserProfile 
              appearance={{
                elements: {
                  card: "shadow-none",
                  formButtonPrimary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
                  navbar: "hidden",
                  navbarMobileMenuButton: "hidden",
                },
              }}
            />
          </div>
        </div>
        
        <div>
          <TicketHistory />
        </div>
      </div>
    </div>
  );
} 