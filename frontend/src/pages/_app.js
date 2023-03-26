import "../styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const endpoint1 = new HttpLink({
  uri: "https://api.studio.thegraph.com/query/41903/optipassport/v0.0.1",
});
const endpoint2 = new HttpLink({
  uri: "https://api.studio.thegraph.com/query/41903/optivisa/v0.0.1",
});

const client = new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === "endpoint2",
    endpoint2, //if above
    endpoint1
  ),
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}
