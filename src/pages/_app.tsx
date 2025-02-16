import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const rotuer = useRouter();

  const onClickButton = () => {
    rotuer.push("/test");
  };

  useEffect(() => {
    rotuer.prefetch("/test"); // 프리패치가 안되는 경우에는 이런식으로 직접 프리패치를 시킬 수도 있다.
  }, []);

  return (
    <div>
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        <Link href={"/search"}>search</Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>
        <div>
          <button type="button" onClick={onClickButton}>
            /test 페이지로 이동
          </button>
        </div>
      </header>
      <Component {...pageProps} />
    </div>
  );
}
