import PageTop from "@/components/PageTop";
import MetaData from "@/components/metaData";
import pageMeta from "@/content/meta";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Note() {
  const router = useRouter();

  // Grab our ID parameter
  const { id } = router.query;
  const { data, error } = useSWR(
    id ? `${process.env.NEXT_PUBLIC_API_URL}/notes/${id}` : null,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const {
    data: { title, content, createdAt, updatedAt },
  } = data;
  return (
    <>
      <MetaData
        description={pageMeta.home.description}
        previewImage={pageMeta.home.image}
        keywords={pageMeta.home.keywords}
      />

      <section className="pageTop min-h-screen">
        <PageTop containerClass="mb-0" pageTitle={title}>
          {content}
        </PageTop>
      </section>
    </>
  );
}
