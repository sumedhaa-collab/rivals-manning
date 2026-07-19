import Link from "next/link";
import heroesData from "../../data/heroes.json";
import guidesData from "../../data/guides.json";

export function getStaticPaths() {
  return {
    paths: heroesData.heroes.map((h) => ({ params: { id: h.id } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const hero = heroesData.heroes.find((h) => h.id === params.id);
  const guide = guidesData.guides.find((g) => g.heroId === params.id) || null;
  return { props: { hero, guide } };
}

export default function HeroGuide({ hero, guide }) {
  return (
    <main className="container">
      <nav>
        <Link href="/">← Back to Counter Picker</Link>
      </nav>
      <h1>{hero.name}</h1>
      <p className="hero-role">
        {Array.isArray(hero.role) ? hero.role.join(" / ") : hero.role}
      </p>

      {guide ? (
        <>
          <section>
            <h2>Overview</h2>
            <p>{guide.summary}</p>
          </section>
          <section>
            <h2>Combos &amp; Timing</h2>
            <ul>
              {guide.combos.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Common Mistakes</h2>
            <ul>
              {guide.commonMistakes.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </section>
        </>
      ) : (
        <p className="hint">Guide coming soon for this hero.</p>
      )}
    </main>
  );
}
