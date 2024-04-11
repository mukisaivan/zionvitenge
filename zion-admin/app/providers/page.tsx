"use client";
import { SessionProvider } from "next-auth/react";

type ProviderProps = {
  children: React.ReactNode;
}

export function Providers({ children}: ProviderProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}