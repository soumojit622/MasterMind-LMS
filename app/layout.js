import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "MasterMind LMS | AI-Powered Learning, Smarter Education",
  description:
    "Unlock the future of learning with MasterMind LMS – an AI-driven platform that personalizes education, boosts engagement, and maximizes success.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.variable} ${outfit.variable} antialiased`}>
          <Provider>{children}</Provider>
          <Toaster />
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
