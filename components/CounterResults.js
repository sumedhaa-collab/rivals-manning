import { getCountersFor } from "../lib/counters";

export default function CounterResults({ enemyHeroes, heroes }) {
  if (enemyHeroes.length === 0) {
    return <p className="hint">Select up to 6 enemy heroes to see suggested counters.</p>;
  }

  return (
    <div className="results">
      {enemyHeroes.map((enemy) => {
        const suggestions = getCountersFor(enemy.id, heroes);
        return (
          <div key={enemy.id} className="result-block">
            <h3>Against {enemy.name}</h3>
            {suggestions.length === 0 ? (
              <p className="hint">No counters recorded yet for this hero.</p>
            ) : (
              <ul>
                {suggestions.map(({ hero, explanation }) => (
                  <li key={hero.id}>
                    <strong>{hero.name}</strong>
                    {explanation ? ` — ${explanation}` : ""}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
