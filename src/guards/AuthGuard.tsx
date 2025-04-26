"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SplashScreen from "@/components/SplashScreen";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log(isAuthenticated)
    if (isAuthenticated === false) {
      router.push("/signin"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated == undefined) {
      //show a loading spinner here
      return <SplashScreen/>;
    }

  return <>{children}</>;
}