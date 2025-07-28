import FadeInSection from "../../components/FadeInSection";

export const metadata = {
  title: "À propos - Site Animé",
  description: "Découvrez qui nous sommes avec Next.js et Framer Motion."
};

export default function AboutPage() {
  return (
    <>
      <header style={{ textAlign: "center", padding: "40px" }}>
        <h1>ℹ️ À propos</h1>
      </header>

      <FadeInSection>
        <p>Ce site utilise Next.js App Router + Framer Motion avec TypeScript.</p>
      </FadeInSection>
    </>
  );
}
