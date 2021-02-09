import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <h1>Helow this is portfolio</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
