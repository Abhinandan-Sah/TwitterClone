import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { Inter } from "next/font/google";

// const inter = Inter({subsets: ["latin"]});

// const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const clientId: string = process.env.NEXT_PUBLIC_CLIENT_ID as string;

console.log(clientId);

if (!clientId) {
  throw new Error("NEXT_PUBLIC_CLIENT_ID is not set in the environment variables");
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}