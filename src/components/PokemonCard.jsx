import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import MOCK_DATA from "../MOCK_DATA";
import { toast } from "react-toastify";
import { PokemonContext } from "../context/PokemonContext";

const Container = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const InfoWrap = styled.div`
  margin-top: 10px;
  height: 51px;
`;

const PokeName = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0px;
  color: black;
`;

const PokeId = styled.p`
  font-size: 12px;
  color: rgb(102, 102, 102);
  margin: 15px 0;
`;

const ActionBtn = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 5px;
`;

const PokemonCard = ({ toggle, card }) => {
  const { myPokemon, setMyPokemon } = useContext(PokemonContext);

  useEffect(() => {
    localStorage.setItem("MyPokemon", JSON.stringify(myPokemon));
  }, [myPokemon]);

  const handleAdd = (e) => {
    e.preventDefault();

    const isIncluded = myPokemon.some((pokemon) => pokemon.id === card.id);
    if (isIncluded) {
      toast.success("이미 추가된 포켓몬입니다!");
      return;
    }

    if (myPokemon.length < 6) {
      const newPokemon = MOCK_DATA.find((list) => list.id === card.id);
      setMyPokemon((prev) => [...prev, newPokemon]);
    } else {
      toast.success("6개까지만 가능!");
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setMyPokemon(myPokemon.filter((list) => list.id !== card.id));
  };

  return (
    <Container>
      <Img src={card.img_url} />
      <InfoWrap>
        <PokeName>{card.korean_name}</PokeName>
        <PokeId>NO. {card.id.toString().padStart(3, "0")}</PokeId>
      </InfoWrap>
      <ActionBtn onClick={toggle ? handleAdd : handleDelete}>
        {toggle ? "추가" : "삭제"}
      </ActionBtn>
    </Container>
  );
};

export default PokemonCard;
