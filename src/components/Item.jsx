import React, { useState, useEffect } from "react";
import axios from "axios";

const Item = ({ pokemon: { name, url }, showStats }) => {
  const [spriteImg, setSpriteImg] = useState(null);
  const [types, setTypes] = useState([]);
  const [stats, setStats] = useState([])

  useEffect(() => {
    axios(url).then(({ data }) => {
      const { sprites, types, moves, stats, weight  } = data;
      setSpriteImg(sprites.front_default);
      setTypes(types);
      const extracted = stats.map(stat => ({ name: stat.stat.name, value: stat.base_stat }));
      const moves_stat = moves.length;
      setStats([...extracted, { "total_moves": moves_stat }, { "weight": weight }]);
    });
  }, []);

  return (
    <div className="item" onClick={() => showStats(spriteImg, types, stats, name)}>
      <img src={spriteImg} alt={name} />
      <p className="name">{name}</p>
      <div className="types">
        {types.map(type => (
          <span className="fire" key={type.slot} >{type.type.name}</span>
        ))}
      </div>
    </div>
  );
};

export default Item;
