import ThemeProvider from "@/components/theme-provider";
import type { ReactNode } from "react";
import Container from "@mui/material/Container";
import Header from "@/components/header";
import NoScriptAlert from "@/components/no-script-alert";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const metadata = {
  title: "Discord Snowflake Parser",
  description: "これは、DiscordのID Snowflakeを解析して日付や時間などを取得するウェブアプリケーションです。"
};

export type LayoutProps = {
  children: ReactNode
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="ja">
      <head />
      <body>
        <ThemeProvider>
          <Container>
            <Header />
            <NoScriptAlert />
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
