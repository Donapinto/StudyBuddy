import { Geist, Geist_Mono } from "next/font/google";

import { StudyBuddyProvider } from "@/context/StudyBuddyContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "StudyBuddy",
  description: "A student dashboard for weekly timetable and progress tracking.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StudyBuddyProvider>{children}</StudyBuddyProvider>
      </body>
    </html>
  );
}
