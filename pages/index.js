import { useState } from "react";
import Head from "next/head";
import heroesData from "../data/heroes.json";
import HeroMultiSelect from "../components/HeroMultiSelect";
import CounterResults from "../components/CounterResults";
import NavBar from "../components/NavBar";

export default function Home() {
  const [selectedIds, setSelectedIds] = useState([]);
  const heroes = heroesData.heroes;
  const enemyHeroes = heroes.filter((h) => selectedIds.includes(h.id));

  return (
    <main className="container">
      <Head>
        <title>Marvel Rivals Companion</title>
      </Head>
      <h1>Marvel Rivals Companion</h1>
      <NavBar />

      <section>
        <h2>Enemy Team ({selectedIds.length}/6)</h2>
        <HeroMultiSelect
          heroes={heroes}
          selectedIds={selectedIds}
          onChange={setSelectedIds}
        />
      </section>

      <section>
        <h2>Suggested Counters</h2>
        <CounterResults enemyHeroes={enemyHeroes} heroes={heroes} />
      </section>
    </main>
  );
}
