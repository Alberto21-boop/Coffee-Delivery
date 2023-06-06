/* import "./styles/css/fonts.css"; */

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Home } from "./components/Pages/Home";
import { Choice } from "./components/Pages/Home/components/Choice";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Home />
      <Choice />
    </ThemeProvider>
  );
}
