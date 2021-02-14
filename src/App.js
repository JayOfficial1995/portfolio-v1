import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SideNav from "./components/SideNav/SideNav";

import theme from "./style/theme";
import { GlobalStyle } from "./style/GlobalStyle";
import { AppStyle } from "./style/common.style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppStyle>
          <GlobalStyle />
          <SideNav />
        </AppStyle>
      </Router>
    </ThemeProvider>
  );
}

export default App;
