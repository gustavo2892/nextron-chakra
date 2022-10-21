import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import { BasicCard } from "../components/BasicCard";
import { TitleCard } from "../components/TitleCard";
import Webcam from '../components/Webcam';

function Photo() {
  return (
    <Fragment>
      <Head>
        <title>Next - Nextron (with-typescript-emotion)</title>
      </Head>
      <div>
        <TitleCard>Nextron with Emotion</TitleCard>
        <BasicCard>
          <Link href="/home">
            <a>Go to home page</a>
          </Link>
        </BasicCard>
        <Webcam />
      </div>
    </Fragment>
  );
}

export default Photo;
