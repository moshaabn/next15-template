import EmailOnlySignInForm from "@/components/auth/EmailOnlySignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignIn | Admin",
  description: "SignIn to your account",
};

export default function SignIn() {
  return <EmailOnlySignInForm />;
}
