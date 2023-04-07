import React from "react";

import * as S from "./card.styles";

export type CardProps = {
  pokeId: number;
  pokeImg: string;
  pokeName: string;
  type:
    | "normal"
    | "grass"
    | "fire"
    | "water"
    | "bug"
    | "poison"
    | "electric"
    | "fairy";
};

const Card: React.FC<CardProps> = ({
  pokeId,
  pokeImg,
  pokeName,
  type = "normal",
}) => {
  return (
    <S.CardBg type={type}>
      <div className="flex items-center justify-between w-full">
        <S.PokeId type={type}>{pokeId}</S.PokeId>
        <span className="text-white capitalize">{type}</span>
      </div>
      <img className="h-48" src={pokeImg} alt="imagem de um Pokemon" />
      <h1 className="w-full text-center text-white capitalize text-bold drop-shadow-sm">
        {pokeName}
      </h1>
    </S.CardBg>
  );
};

export default Card;
