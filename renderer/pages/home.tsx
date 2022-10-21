import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

import { BasicCard } from "../components/BasicCard";
import { TitleCard } from "../components/TitleCard";
import { HoverableCard } from "../components/HoverableCard";

function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home - Nextron (with-typescript-emotion)</title>
      </Head>
      <div>
        <TitleCard>Nextron with Emotion</TitleCard>
        <BasicCard>
          <Link href="/form">
            <a>Go to form page</a>
          </Link>
        </BasicCard>
        <BasicCard>
          <Link href="/photo">
            <a>Go to photo page</a>
          </Link>
        </BasicCard>
        <HoverableCard>
          With <code>:hover</code>.
        </HoverableCard>
      </div>
    </Fragment>
  );
}

export default Home;
