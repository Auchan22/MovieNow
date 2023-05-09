"use client"

import React from "react"
import myStore from "@/store/myStore"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Provider } from "jotai"

import { TailwindIndicator } from "./tailwind-indicator"
import { ThemeProvider } from "./theme-provider"

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  )

  return (
    <Provider store={myStore}>
      <QueryClientProvider client={client}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}

          <ReactQueryDevtools initialIsOpen={false} />
          <TailwindIndicator />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  )
}

export default Providers
