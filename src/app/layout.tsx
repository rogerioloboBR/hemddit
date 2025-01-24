import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "H&Mddit",
  description: "Um lugar para conversarmos sobre RPG!",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        <Navbar />
        <div className="container max-w-7x1 mx-auto h-full pt-12">
          {children}
        </div>

        <Toaster />
      </body>
    </html>
  );
}
