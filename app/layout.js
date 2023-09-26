import Navbar from "@/components/Navbar";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./auth/Provider";
import { ToastContainer } from "react-toastify";
import LocalFont from "next/font/local";

export const metadata = {
  title: {
    default: "Movies",
    template: "Movies | %s" /*  */,
  },
  description: "site movies",
};
const vazirFont = LocalFont({
  src: "../public/fonts/Vazir.woff2",
  variable: "--font-vazir",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${vazirFont.variable}`}>
        <AuthProvider>
          <Navbar />
          {children}
          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  );
}
