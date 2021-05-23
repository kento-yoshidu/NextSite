import { useRouter } from "next/router";

const AuthorArticlePage = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const author = router.query.author;

  return (
    <div>
      <h1>Article: {slug}</h1>
      <h2>Author: {author}</h2>
      <pre>
        {JSON.stringify(router.query, null, 2)}
      </pre>
    </div>
  )
}

export default AuthorArticlePage