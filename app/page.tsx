import Link from "next/link";
import { api } from "../lib/strapi";
import FadeInSection from "../components/FadeInSection";

export const metadata = {
  title: "Blog - Animé avec Strapi",
  description: "Liste des articles depuis Strapi CMS",
};

export default async function HomePage() {
  try {
    const { data } = await api.get("/articles?populate=*");
    const articles = data?.data || []; // ✅ sécurisation contre undefined
    // console.log("Articles récupérés :", articles);

    if (articles.length === 0) {
      return <p style={{ textAlign: "center" }}>Aucun article trouvé.</p>;
    }

    return (
      <>
        <header style={{ textAlign: "center", padding: "40px" }}>
          <h1>📰 Articles du Blog (Strapi)</h1>
        </header>

        {articles.map((a: any) => {
          const attrs = a || {}; // ✅ sécurisation
          return (
            <FadeInSection key={a.id}>
              <h2>
                <Link href={`/blog/${attrs.slug || "#"}`}>
                  {attrs.title || "Sans titre"}
                </Link>
              </h2>
            </FadeInSection>
          );
        })}
      </>
    );
  } catch (error) {
    console.error("Erreur API Strapi :", error);
    return <p style={{ color: "red", textAlign: "center" }}>Erreur lors du chargement des articles.</p>;
  }
}
