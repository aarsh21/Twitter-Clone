import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";
import { SideNav } from "~/components/SideNav";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="This is twitter clone by aarsh" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <div className="container mx-auto flex items-start sm:pr-40">
        <SideNav />
        <div className="main border-x min-h-screen flex-grow ">
          <Component {...pageProps} />
        </div>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
