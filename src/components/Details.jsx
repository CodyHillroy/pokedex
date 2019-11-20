import React from "react";

const Details = ({ details }) => {
  const { sprite, name, id, stats, types } = details;
  console.log(stats);
  return (
    <aside className="details">
      <img src={sprite} alt={name} />
      <p className="name">{`${name} #${id}`}</p>
      <table>
        <tbody>
          <tr>
            <td>Type</td>
            <td>{types.join(" - ")}</td>
          </tr>
          {stats.map(s => (
            <tr>
              <td>{s.name}</td>
              <td>{s.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </aside>
  );
};

export default Details;
