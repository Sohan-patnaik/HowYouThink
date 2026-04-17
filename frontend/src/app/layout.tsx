import type { Metadata } from "next";
<<<<<<< HEAD
import { Inter, JetBrains_Mono } from "next/font/google";
=======
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
>>>>>>> 43a2b4ea611d136390df66cebec521ca3fdc353c
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

<<<<<<< HEAD
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
=======
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
>>>>>>> 43a2b4ea611d136390df66cebec521ca3fdc353c
  subsets: ["latin"],
});

export const metadata: Metadata = {
<<<<<<< HEAD
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
=======
  title: "HowYouThink",
  description: "Created By Sohan Patnaik",
>>>>>>> 43a2b4ea611d136390df66cebec521ca3fdc353c
};

export default function RootLayout({
  children,
<<<<<<< HEAD
}: {
  children: React.ReactNode;
}) {
=======
}: Readonly<{
  children: React.ReactNode;
}>) {
>>>>>>> 43a2b4ea611d136390df66cebec521ca3fdc353c
  return (
    <ClerkProvider>
      <html lang="en">
        <body
<<<<<<< HEAD
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
=======
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {children}
>>>>>>> 43a2b4ea611d136390df66cebec521ca3fdc353c
        </body>
      </html>
    </ClerkProvider>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 43a2b4ea611d136390df66cebec521ca3fdc353c
