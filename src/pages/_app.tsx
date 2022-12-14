import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/apollo-client";
import { Provider } from "react-redux";
import AppLayout from "../components/Layout";
import store from "../store/store";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackComponent from "../common/ErrorFallbackComponent";
import { useState } from "react";

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
