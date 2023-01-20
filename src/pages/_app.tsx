import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const bla = 'test'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
