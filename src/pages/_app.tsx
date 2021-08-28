import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Healthy Food</title>
        <link rel="shortcut icon" href="img/favicon.png" />
        <link rel="apple-touch-icon" href="img/favicon.png" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f2f3f5" />
        <meta name="description" content="The best recipe site in the world" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
