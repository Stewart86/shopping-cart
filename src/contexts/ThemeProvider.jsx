import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import { deepOrange, orange } from "@material-ui/core/colors"

import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useMemo } from "react"

export const ThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  let theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: orange,
          secondary: deepOrange,
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  )
  theme = responsiveFontSizes(theme)

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}
