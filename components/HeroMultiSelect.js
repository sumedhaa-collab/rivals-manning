const MAX_SELECTED = 6;

export default function HeroMultiSelect({ heroes, selectedIds, onChange }) {
  function toggle(id) {
    if (selectedIds.includes(id)) {
      onChange(selectedIds.filter((x) => x !== id));
    } else if (selectedIds.length < MAX_SELECTED) {
      onChange([...selectedIds, id]);
    }
  }

  return (
    <div className="hero-grid">
      {heroes.map((hero) => {
        const selected = selectedIds.includes(hero.id);
        return (
          <button
            key={hero.id}
            type="button"
            className={`hero-tile ${selected ? "selected" : ""}`}
            onClick={() => toggle(hero.id)}
          >
            <span className="hero-name">{hero.name}</span>
            {hero.role ? (
              <span className="hero-role">
                {Array.isArray(hero.role) ? hero.role.join(" / ") : hero.role}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
