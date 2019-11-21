import React from "react";
import { connect } from "react-redux";

const Details = ({ detailsData }) => {
  const { sprite, name, id, stats, types } = detailsData;

  return (
    <div className="poke-details-wrapper">
      <aside className="shadow poke-details">
        <img src={sprite} alt={name} />
        <p className="name">{`${name} #${id}`}</p>
        <table>
          <tbody>
            <tr>
              <td>Type</td>
              <td>{types.join(" - ")}</td>
            </tr>
            {stats.map(s => (
              <tr key={s.name}>
                <td>{s.name}</td>
                <td>{s.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </aside>
    </div>
  );
};

const mapStateToProps = state => ({
  detailsData: state.details.data
});

export default connect(mapStateToProps)(Details);
