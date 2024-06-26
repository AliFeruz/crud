import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@/context/themeContext";
import DataProvider from "@/context/dataContext";

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode('dark')
  }
  const lightTheme = () => {
    setThemeMode('light')
  }

  useEffect(() => {
      document.querySelector('html')?.classList.remove('dark', 'light');
      document.querySelector('html')?.classList.add(themeMode);
  }, [themeMode]);

  return (
    <SessionProvider session={session}>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <DataProvider>
      <Component {...pageProps} />;
      </DataProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}
