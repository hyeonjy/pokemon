import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../data/MOCK_DATA";
import styled from "styled-components";
import { ActionBtn } from "../components/PokemonCard";
import { PokemonContext } from "../context/PokemonContext";

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

const BtnWrap = styled.div`
  width: 250px;
`;

const BackBtn = styled.button`
  margin-top: 20px;
  margin-right: 30px;
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

const StyledActionBtn = styled(ActionBtn)`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  width: 100px;
  height: 43px;
  border-radius: 8px;
`;

const PokemonDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null); //id에 해당하는 포켓몬 데이터
  const [toggle, setToggle] = useState(false); //추가, 삭제 버튼을 위한 토글
  const { myPokemon } = useContext(PokemonContext);
  const navigate = useNavigate();
  const { handleAdd, handleDelete } = useContext(PokemonContext);

  useEffect(() => {
    setData(MOCK_DATA.filter((pokemon) => pokemon.id === +id)[0]);
    setToggle(myPokemon.some((pokemon) => pokemon.id === +id));
  }, [id, myPokemon]);

  const handleBtnClick = (e) => {
    if (toggle) {
      handleDelete(e, id);
    } else {
      handleAdd(e, id);
    }
  };

  // 뒤로 가기
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {/* 데이터가 있을때 포켓몬 디테일 페이지가 보이도록 */}
      {data && (
        <Container>
          <PokeImg src={data.img_url} />
          <PokeName>{data.korean_name}</PokeName>
          <PokeDetail>타입: {data.types.join(", ")}</PokeDetail>
          <PokeDetail>{data.description}</PokeDetail>

          {/* 뒤로가기 버튼과 추가(삭제) 버튼 */}
          <BtnWrap>
            <BackBtn onClick={goBack}>뒤로 가기</BackBtn>
            <StyledActionBtn onClick={handleBtnClick}>
              {toggle ? "삭제" : "추가"}
            </StyledActionBtn>
          </BtnWrap>
        </Container>
      )}
    </>
  );
};

export default PokemonDetail;
