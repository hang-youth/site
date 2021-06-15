import '../styles/globals.scss'
import { useRouter } from 'next/router'

import { ManagedUIContext } from '@components/ui/context'
import { CommerceProvider } from '@framework'

function MyApp({ Component, pageProps }) {
  const { locale = 'en-US' } = useRouter()

  return <ManagedUIContext>
  <CommerceProvider locale={locale}><Component {...pageProps} /></CommerceProvider></ManagedUIContext>
}

export default MyApp
