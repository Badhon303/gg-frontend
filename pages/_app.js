import Head from "next/head"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gadget Gunda</title>
        <meta
          name="viewport"
          content="width=device-width, init ia I-sca le=l"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
