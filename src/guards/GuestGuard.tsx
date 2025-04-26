"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SplashScreen from "@/components/SplashScreen";

export default function GuestGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log(isAuthenticated)
    if (isAuthenticated) {
      router.push("/shops"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated == undefined) {
    //show a loading spinner here
    return <SplashScreen/>;
  }
  if (!isAuthenticated) {
    return <>{children}</>;
  }
}