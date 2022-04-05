import React from 'react';
import styled from 'styled-components'
import './App.css';
import Profile from './components/molecules/Profile'
import CategoryList from './components/organisms/CategoryList';
import CardList from './components/organisms/CardList';

const FlexBox = styled.div`
  display: flex;
`

const SideBar = styled.div`
  padding: 0px 20px 0px 20px;
  width: 250px;
  height: 100vh;
  display: inline-block;
  background-color:whitesmoke;
`

const Main = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
`
const App: React.FC = () => {
  return (
    <FlexBox>
      <SideBar>
        <Profile />
        <CategoryList />
      </SideBar>
      <Main>
        <CardList />
      </Main>
    </FlexBox>
  );
}

export default App;
