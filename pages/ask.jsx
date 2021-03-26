import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Stories from "../components/Stories";

export async function getStaticProps() {
  const posts = await fetcher("/api/askstories");
  return { props: { posts } };
}

export default function Best(props) {
  const { data, error } = useSWR("/api/askstories", fetcher, {
    initialData: props.posts,
  });

  return (
    <div className="container grid justify-center my-5">
      <h1 className="main-title">Ask Stories</h1>
      {!error && <Stories stories={data} />}
    </div>
  );
}
