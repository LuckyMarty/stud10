import { api } from "../../../lib/strapi";
import FadeInSection from "../../../components/FadeInSection";
import Image from "next/image";
import { notFound } from "next/navigation";
import RichTextRenderer from "../../../components/RichTextRenderer";

export async function generateStaticParams() {
  const res = await api.get("/articles");
  const articles = res.data?.data || [];
  return articles.map((a: any) => ({ slug: a.slug }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const res = await api.get("/articles");
  const articles = res.data?.data || [];
  const post = articles.find((a: any) => a.slug === params.slug);

  if (!post) notFound();

  return (
    <article style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>{post.title}</h1>

      {post.image && (
        <Image
          src={`http://localhost:1337${post.image.url}`}
          alt={post.title}
          width={800}
          height={400}
        />
      )}

      <FadeInSection>
        <RichTextRenderer content={post.content} />
      </FadeInSection>
    </article>
  );
}
