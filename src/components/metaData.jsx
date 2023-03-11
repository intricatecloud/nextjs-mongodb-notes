import Head from "next/head";
import useWindowLocation from "@/hooks/useWindowLocation";

export default function MetaData({
  title,
  description,
  previewImage,
  keywords,
}) {
  const { currentURL } = useWindowLocation();

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description || "Notes"} />
      <title>{`${title || ""} Notes`}</title>
      <meta name="theme-color" content="#000" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="author" content="Notes"></meta>
      <meta name="robots" content="index,follow" />
      <meta name="keywords" content={`${keywords || ""} Notes`} />

      {/* Og */}
      <meta property="og:title" content={`${title || ""} Notes`} />
      <meta property="og:description" content={description || "Notes"} />
      <meta property="og:site_name" content="Notes" />
      <meta property="og:url" content={currentURL} key="ogurl" />
      <meta property="og:image" content={previewImage || ""} />
    </Head>
  );
}
