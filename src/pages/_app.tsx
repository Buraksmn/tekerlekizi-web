import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import ThemeProvider from "@/theme";
import type { AppProps } from "next/app";
import "../styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </ThemeProvider>
  );
}
