import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import darkTheme from '@/themes/DarkTheme';
import { SocketProvider } from '@/hooks/SocketContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SocketProvider>
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </SocketProvider>
  )
}
