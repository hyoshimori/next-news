import Base from "../Base";
import Head from "next/head";

import { AppProvider } from "../components/context/AppContextProps";

export default function Home() {
  return (
    <>
      <AppProvider>
        <Head>
          <title>NextNews</title>
        </Head>
        <main>
          <Base />
        </main>
      </AppProvider>
    </>
  );
}
