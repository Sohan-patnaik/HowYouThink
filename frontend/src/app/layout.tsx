import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HowYouThink – Build & Embed AI Chatbots for Your Website",
  description:
    "Create custom AI chatbots trained on your data. Describe your bot, upload content, and instantly embed it into your website. No coding required. Perfect for businesses, creators, and developers.",
  
  keywords: [
    "AI chatbot builder",
    "embed chatbot website",
    "custom AI bot",
    "train chatbot with data",
    "no code AI chatbot",
    "website chatbot integration",
    "AI SaaS platform",
    "customer support bot",
  ],

  authors: [{ name: "Sohan Patnaik" }],
  creator: "Sohan Patnaik",

  openGraph: {
    title: "HowYouThink – Create & Embed AI Chatbots",
    description:
      "Build AI chatbots using your own data and embed them into your website in minutes.",
    siteName: "HowYouThink",
    type: "website",
  },

   

  category: "technology",

  applicationName: "HowYouThink",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-gray-50 text-gray-900`}
        >
        
          <header className="sticky top-0 z-50 flex items-center justify-between px-6 h-16 bg-white border-b border-gray-200 backdrop-blur-sm">
            
            
            <div className="text-lg font-semibold tracking-tight">
              HowYouThink
            </div>

          
            <div className="flex items-center gap-4">
              <SignedOut>
                <SignInButton>
                  <button className="text-sm font-medium text-gray-700 hover:text-black transition">
                    Sign In
                  </button>
                </SignInButton>

                <SignUpButton>
                  <button className="bg-[#6c47ff] hover:bg-[#5a3be0] text-white rounded-lg font-medium text-sm px-4 py-2 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95">
                    Get Started
                  </button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </header>

          
          <main className="min-h-[calc(100vh-64px)] px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}