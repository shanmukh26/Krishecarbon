// pages/_app.jsx
import "@/styles/globals.css";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["100","200","300","400","500","600","700","800","900"], // includes Black
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300","400","500","600","700"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${geistSans.variable} ${inter.variable}`}>
      {/* Global font setup */}
      <style jsx global>{`
        :root {
          --font-heading: var(--font-geist-sans);
          --font-body: var(--font-inter);
        }

        /* Default body = Inter */
        html, body {
          font-family: var(--font-body), system-ui, -apple-system, "Segoe UI",
            Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Headings default to Geist (like your screenshot) */
        h1, h2, h3, h4, h5, h6, strong, .font-heading {
          font-family: var(--font-heading), system-ui, sans-serif;
        }

        /* Utility if you ever need to force Inter on an element */
        .font-body {
          font-family: var(--font-body), system-ui, sans-serif !important;
        }
      `}</style>

      <Component {...pageProps} />
    </div>
  );
}

