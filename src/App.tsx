import { useEffect, useState } from "react";
import Card from "./Components/Card";

import * as S from "./app.styles";
import { ResponsePokemon, api } from "./utils/api";

export type TPokemon = {
  name: string;
  type: string;
  pokeId: number;
  imgUrl: string;
};

function App() {
  const [poke, setPoke] = useState<TPokemon | undefined>();

  const fetchRandom = async () => {
    const randomNum = Math.floor(Math.random() * 20);

    const response = await api<ResponsePokemon>(
      `https://pokeapi.co/api/v2/pokemon/${randomNum}`
    );

    setPoke({
      name: response.name,
      type: response.types[0].type.name,
      pokeId: response.id,
      imgUrl: response.sprites.front_default,
    });
  };

  useEffect(() => {
    (async () => {
      await fetchRandom();
    }
    )()
  }, [])

  return (
    <S.Container>
      {!!poke && (
        <Card
          type={(poke.type as any) ?? "normal"}
          pokeId={poke.pokeId}
          pokeImg={poke.imgUrl}
          pokeName={poke.name}
        />
      )}

      <button
        className="px-3 py-1 text-black bg-white rounded text-bold"
        onClick={fetchRandom}
      >
        Random Pokemon
      </button>
    </S.Container>
  );
}

export default App;
