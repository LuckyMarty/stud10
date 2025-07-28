import FadeInSection from "../components/FadeInSection";

export const metadata = {
  title: "Accueil - Site Animé",
  description: "Page d'accueil avec Next.js (App Router) et Framer Motion."
};

export default function HomePage() {
  return (
    <>
      <header style={{ textAlign: "center", padding: "40px" }}>
        <h1>🚀 Bienvenue sur mon site animé avec App Router !</h1>
      </header>

      <FadeInSection>
        <h2>✨ Animation 1</h2>
        <p>Cette section fade-in au scroll.</p>
      </FadeInSection>

      <FadeInSection>
        <h2>🔥 Animation 2</h2>
        <p>Encore une animation fluide et SEO-friendly.</p>
      </FadeInSection>
    </>
  );
}
