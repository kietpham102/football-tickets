import { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Sign Up - Football Tickets",
  description: "Create your Football Tickets account",
};

export default function SignUpPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign up to start booking football tickets
          </p>
        </div>

        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: 
                "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
              card: "bg-white shadow-xl border-0",
              headerTitle: "text-xl font-semibold",
              headerSubtitle: "text-muted-foreground text-sm",
            },
          }}
          signInUrl="/sign-in"
          redirectUrl="/"
        />
      </div>
    </div>
  );
} 