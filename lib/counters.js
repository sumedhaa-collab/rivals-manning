// heroes.json stores counters as "this hero counters heroId X" — so to find
// suggested picks against an enemy hero, we search for heroes whose counters
// list includes that enemy's id.
export function getCountersFor(enemyHeroId, heroes) {
  const suggestions = [];
  for (const hero of heroes) {
    const match = hero.counters?.find((c) => c.heroId === enemyHeroId);
    if (match) {
      suggestions.push({ hero, explanation: match.explanation });
    }
  }
  return suggestions;
}
