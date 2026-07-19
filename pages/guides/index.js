import Link from "next/link";
import Head from "next/head";
import heroesData from "../../data/heroes.json";
import guidesData from "../../data/guides.json";
import NavBar from "../../components/NavBar";

export function getStaticProps() {
  const guidedIds = new Set(guidesData.guides.map((g) => g.heroId));
  const heroes = heroesData.heroes.filter((h) => guidedIds.has(h.id));
  return { props: { heroes } };
}

export default function Guides({ heroes }) {
  return (
    <main className="container">
      <Head>
        <title>Hero Guides — Marvel Rivals Companion</title>
      </Head>
      <h1>Marvel Rivals Companion</h1>
      <NavBar />

      <section>
        <h2>Hero Guides</h2>
        <p className="hint">More guides coming soon.</p>
        <ul className="guide-list">
          {heroes.map((hero) => (
            <li key={hero.id}>
              <Link href={`/heroes/${hero.id}`}>{hero.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
