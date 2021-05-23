import { useRouter } from "next/router"

const ArticlePage = () => {
  const router = useRouter();
  const slug = router.query.slug;

  return <h2>Aticle: {slug}</h2>
}

export default ArticlePage