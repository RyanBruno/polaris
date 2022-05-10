import { AppProvider, Stack,Heading,Badge } from "@shopify/polaris";
import translations from '@shopify/polaris/locales/en.json';

function Example() {
  return (
    <AppProvider i18n={translations}>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@shopify/polaris@latest/build/esm/styles.css"
      />
      <div
        style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 50px",
  }}
      >
        <Stack distribution="fillEvenly">
  <Heading>Order #1136</Heading>
  <Badge>Paid</Badge>
  <Badge>Fulfilled</Badge>
</Stack>
      </div>
    </AppProvider>
  );
}

export default Example;
    