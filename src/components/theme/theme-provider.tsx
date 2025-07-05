// components/theme-provider.tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            {...props}
        >
            {children}
        </NextThemesProvider>
    )
}
//avoid hydration error cause by next theme because client html is different from server sent html

// 1. === Add this as attributhe to ThemeProvider
// attribute="class"
//       defaultTheme="system"
//       enableSystem
//       disableTransitionOnChange


// 2. === Add this to the top of your _app.tsx or layout.tsx

// suppressHydrationWarning

//example usage in layout.tsx
{/* <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html> */}