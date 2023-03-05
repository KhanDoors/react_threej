import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "./theme";
import Main from "./pages/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box marginTop={"2rem"}>
        <Main />
      </Box>
    </ThemeProvider>
  );
}

/**
 * @type {import('@mui/material').SxProps}
 */
const styles = {
  container: {
    display: "flex",
    bgcolor: "neutral.light",
    height: "calc(100% - 64px)",
  },
  mainSection: {
    p: 4,
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
};

export default App;
