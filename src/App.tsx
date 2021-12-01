import React, { useState } from 'react';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import Inventory from './component/Inventory/Inventory';
import Profile from './component/Profile/Profile';
import Skill from './component/Skill/Skill';
import Achievement from './component/Title/Achievement';
import NavBar from './NavBar';
import theme from './styles/theme';


function App() {
  const [page, setPage] = useState('profile')

  const setTitle = () => {
    switch (page) {
      case 'profile':
          return (
            <TitleBox>
              <h1> Profile </h1>
              <span> / 인적사항 </span>
            </TitleBox>
            )
      case 'skill':
        return (
          <TitleBox>
            <h1> Skill </h1>
            <span> / 기술 & 역량 </span>
          </TitleBox>
          )
      case 'inventory':
      return (
        <TitleBox>
          <h1> Inventroy </h1>
          <span> / 포트폴리오 항목 </span>
        </TitleBox>
        )
      case 'achievement':
        return (
          <TitleBox>
            <h1> Achivemenet </h1>
            <span> / 경력 & 자격 </span>
          </TitleBox>
          )
    }
  }

  return (
    <div className="App">
      <ThemeProvider theme ={theme} >
      <GrobalStyle />
      
        <NavBar page= {page} setPage={setPage} />
        
        <MainBox>
        
        {setTitle()}

          { page === 'profile' ? <Profile /> : null }
          { page === 'skill' ? <Skill /> : null}
          { page === 'inventory' ? <Inventory /> : null }
          { page === 'achievement' ? <Achievement /> : null }
        </MainBox>
        
      </ThemeProvider>
    </div>
  );
}
export default App;


const GrobalStyle= createGlobalStyle`
  body {
    
  }
`

const MainBox = styled.div`
  
  max-width: ${ ({theme}) => theme.deviceSizes.pc };
  margin: 0 auto;
  border: ${ ({theme}) => theme.border.main };
  border-top: none;
  background: ${ ({theme}) => theme.colors.gray_2 };


  @media ${ ({theme}) => theme.device.tablet } {
    background: #bee8ee;
    /* 미디어쿼리. 하나일떄 */
    
    /* 프로필 페이지에선 두개씩 묶은 미디어를 row에서 colomn으로 바꿔주는 식으로, */
    /* 그 외에 페이지에선 grid를 2에서 1로 바꿔주는 식으로 */
  }
`

export const TitleBox = styled.div`
  border-bottom: ${ ({theme}) => theme.border.main };
  margin: 0 12px;

  h1 {
    display: inline-block;
    margin: 6px;
  }
  span {
    font-weight: 600;
    font-size: ${ ({ theme }) => theme.fontSizes.small }
  }
`