import "@/styles/globals.css";
import styles from "./index.module.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { theme } from "@/theme";
import { TRPCReactProvider } from "@/trpc/react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SignInButton } from "./_components/SignInButton/SignInButton";

export const metadata: Metadata = {
  title: "Sohnim IO",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={GeistSans.className}>
          <TRPCReactProvider>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                <main className={styles.main}>
                  <div className={styles.titleContainer}>
                    <h1 className={styles.title}>
                      Sohnim <span className={styles.pinkSpan}>IO</span>
                    </h1>
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                  </div>
                  <SignedOut>
                    <div className={styles.container}>
                      <div className={styles.card}>
                        <h1 className={styles.heading}>!ברוכים הבאים</h1>
                        <SignInButton />
                        <div className={styles.clerkComponent}></div>
                      </div>
                    </div>
                  </SignedOut>
                  <SignedIn>
                    <div className={styles.container}>{children}</div>
                  </SignedIn>
                </main>
              </ThemeProvider>
            </AppRouterCacheProvider>
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}