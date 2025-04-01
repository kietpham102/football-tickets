import { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Sign In - Football Tickets",
  description: "Sign in to your Football Tickets account",
};

export default function SignInPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        <SignIn
          appearance={{
            elements: {
              formButtonPrimary: 
                "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
              card: "bg-white shadow-xl border-0",
              headerTitle: "text-xl font-semibold",
              headerSubtitle: "text-muted-foreground text-sm",
            },
          }}
          signUpUrl="/sign-up"
          redirectUrl="/"
        />
      </div>
    </div>
  );
}