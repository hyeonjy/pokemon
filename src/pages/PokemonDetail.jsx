import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../MOCK_DATA";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100vh;
`;

const PokeImg = styled.img`
  width: 200px;
  height: 200px;
`;

const PokeName = styled.h2`
  margin: 20px 0px;
  color: rgb(255, 0, 0);
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  unicode-bidi: isolate;
`;

const PokeDetail = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
  margin: 16px 0;
  line-height: 1.5;
  font-weight: 400;
`;

const BackBtn = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid transparent;
  font-weight: 500;
  &:hover {
    border-color: #646cff;
  }
`;

const PokemonDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setData(MOCK_DATA.filter((pokemon) => pokemon.id === +id)[0]);
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {data && (
        <Container>
          <PokeImg src={data.img_url} />
          <PokeName>{data.korean_name}</PokeName>
          <PokeDetail>타입: {data.types.join(", ")}</PokeDetail>
          <PokeDetail>{data.description}</PokeDetail>
          <BackBtn onClick={goBack}>뒤로 가기</BackBtn>
        </Container>
      )}
    </>
  );
};

export default PokemonDetail;
