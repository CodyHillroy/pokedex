import React from "react";

const Details = () => {
  return (
    <aside className="details">
      <img
        src="https://cdn.vox-cdn.com/thumbor/rpmbJ_H5i4g3vFNeZVB6mdZHfW4=/0x0:711x400/1200x800/filters:focal(325x93:437x205)/cdn.vox-cdn.com/uploads/chorus_image/image/60365061/pokemon_piplup.0.png"
        alt="img"
      />
      <p className="name">Pokemon Name</p>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <th>Type</th>
            <th>Fire</th>
          </tr>
          <tr>
            <td>Attack</td>
            <td>52</td>
          </tr>
          <tr>
            <td>Defence</td>
            <td>43</td>
          </tr>
          <tr>
            <td>HP</td>
            <td>39</td>
          </tr>
          <tr>
            <td>SP Attack</td>
            <td>60</td>
          </tr>
          <tr>
            <td>SP Defence</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>65</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>85</td>
          </tr>
          <tr>
            <td>Total moves</td>
            <td>89</td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
};

export default Details;
