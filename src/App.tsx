import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { HeaderMenu } from "../components/HeaderMenu/HeaderMenu";
import { FooterCentered } from "../components/FooterCentered/FooterCentered"

export default function App() {
  return (
    <MantineProvider defaultColorScheme={'dark'}>
      <HeaderMenu/>

      <FooterCentered/>
    </MantineProvider>
  )
}
