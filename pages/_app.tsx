import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AuthProvider } from '../hooks/useAuth'
import { RecoilRoot } from 'recoil'


function MyApp({ Component, pageProps }: AppProps)
{
  return <>
    <Head>
      <link rel="icon" href="/LogoIcon.ico" />
    </Head>
    <RecoilRoot>
    <AuthProvider>
      <Component { ...pageProps } />
    </AuthProvider>
    </RecoilRoot>
  </>
}

export default MyApp
