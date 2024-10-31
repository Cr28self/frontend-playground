import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryConfig } from "./lib/react-query";
import { ErrorBoundary } from "react-error-boundary";
import MainErrorFallback from "@/components/error/MainErrorFallback";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type AppProvidersProps = {
  children: React.ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      })
  );

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <QueryClientProvider client={queryClient}>
          {import.meta.env.DEV && <ReactQueryDevtools />}

          {children}
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
