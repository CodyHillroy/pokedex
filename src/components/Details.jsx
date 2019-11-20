import React from "react";

const Details = ({ details }) => {
  const { sprite, name, id, stats, types, moves, weight } = details;
  return (
    <aside className="details">
      <img src={sprite} alt={name} />
      <p className="name">{`${name} #${id}`}</p>
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
        </tbody>
      </table>
    </aside>
  );
};

export default Details;
