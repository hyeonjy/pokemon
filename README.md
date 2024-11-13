# 1️⃣ 프로젝트 소개
## Intro: 포켓몬 도감 만들기
(1) 소개 : React의 상태 관리와 이벤트 핸들링을 활용하여, 포켓몬 정보를 다루는 작은 애플리케이션을 완성
(2) 목적: React의 props drilling과 Context API, redux를 각 브랜치별로 적용하여 React-router-dom 을 활용한 라우팅 구현 방식을 경험
(3) 개발기간 : 2024.11.06 ~ 2024.11.13

## 사용스택
<div style="display:flex">
  <img alt="React" src="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=black"/>
  <img alt="styledcomponents" src="https://img.shields.io/badge/styledcomponents-DB7093.svg?&style=for-the-badge&logo=styledcomponents&logoColor=black"/>
  <img alt="redux" src="https://img.shields.io/badge/redux-764ABC.svg?style=for-the-badge&logo=redux&logoColor=black"/>
</div>

## 배포
[포켓몬 도감 링크](https://pokemon-eta-woad.vercel.app/)

## 브랜치 소개 
(1) **props-drilling**: 각 컴포넌트가 필요한 데이터를 **props로 전달**받아 사용하는 방식으로 상태를 관리 <br>
(2) **context**: PokemonContext를 생성하여 (addPokemon, removePokemon)함수를 **Context API**로 관리하여 props drilling을 피하고, 포켓몬 컬렉션을 전역적으로 관리  <br>
(3) **redux** : **Redux Toolki**t을 사용하여 상태 관리를 리팩토링하고 **redux-persist**를 적용하여 세션 전반에 걸쳐 상태 지속성을 유지  <br>

<br>

# 2️⃣ 구현기능
## # 구현기능 요약
특징
- 생성, 읽기, 삭제로 포켓몬을 선택하고 관리합니다.
- 원활한 탐색 경험을 위해 React-router-dom을 사용한 라우팅.
- 향상된 UX를 위해 react-toastify를 통한 사용자 피드백.
- 상태 관리에 대한 다양한 접근 방식:
   - Props drilling: 구성 요소 계층 구조를 통해 상태 및 핸들러를 전달합니다.
   - Context API: 컨텍스트를 통해 전역 상태를 관리합니다.
   - Redux: 지속적인 상태를 위한 Redux Toolkit 및 redux-persist를 사용한 중앙 집중식 상태 관리.

<br />

**포켓몬 선택 및 해제**
- 대시보드에 나만의 포켓몬을 추가, 삭제

**알람 적용**
- **중복 선택 방지**: 이미 선택된 포켓몬을 다시 선택하려 하면 `toast` 메시지로 "이미 선택된 포켓몬입니다."라는 안내를 띄웁니다.
- **선택 수 제한 안내**: 선택된 포켓몬 수가 6개를 초과할 경우 `toast` 메시지로 "6개까지만 가능!"라는 안내를 띄웁니다.

<br>
