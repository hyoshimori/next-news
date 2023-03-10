import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Layout from '@/layouts/NavLayout'
import styles from "@/styles/Home.module.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
<div className={styles.body}>
  <Layout>
    <Component {...pageProps} />
  </Layout>
</div>
)}
