import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";

import { client } from "../graphql/apollo-client";
import AppLayout from "../components/Layout";
import store from "../store/store";
import ErrorFallbackComponent from "../common/ErrorFallbackComponent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
        <ApolloProvider client={client}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ApolloProvider>
      </ErrorBoundary>
    </Provider>
  );
}
