import capitalize from "lodash/capitalize";

// I know that all code below is garbage. Forgive me!
export default data => {
  return data.map(r => {
    const { id, name, weight, stats, types, moves, sprites } = r.data;

    const extractedStats = stats.map(stat => {
      const {
        base_stat: value,
        stat: { name }
      } = stat;
      const capitalizedName = name
        .split("-")
        .map(n => capitalize(n))
        .join(" ");
      return { name: capitalizedName, value };
    });

    extractedStats.push(
      { name: "Moves", value: moves.length },
      { name: "Weight", value: weight }
    );

    const extractedTypes = types.map(type => {
      const {
        type: { name }
      } = type;
      return capitalize(name);
    });

    const sprite = sprites["front_default"];

    return {
      id,
      name: capitalize(name),
      sprite,
      stats: extractedStats,
      types: extractedTypes
    };
  });
};
