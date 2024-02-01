import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { HeaderMenu } from "../components/HeaderMenu/HeaderMenu";

export default function App() {
  return <MantineProvider theme={theme}>

    <HeaderMenu/>

    </MantineProvider>;
}
