import "@/styles/globals.css";
import { Inter, Merriweather_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather_Sans({ subsets: ["latin"], variable: "--font-merriweather" });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${merriweather.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
