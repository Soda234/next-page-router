import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  const { query } = router.query;
  return (
    <div>
      <h1>Books {query}</h1>
    </div>
  );
}
