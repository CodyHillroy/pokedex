import React from "react";

const Details = ({ activeStats }) => {
  const [spriteImg, types, stats, name] = activeStats;
  return (
    <aside className="details">
      <img src={spriteImg} alt="img" />
      <p className="name">{name}</p>
      <table>
        <thead>
          <tr>
            <th>Stats</th>
            <th>Base</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Type</td>
            <td>{types.join(", ")}</td>
          </tr>
          {stats.map(stat => (
            <tr>
              <td>{stat.name}</td>
              <td>{stat.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </aside>
  );
};

export default Details;
