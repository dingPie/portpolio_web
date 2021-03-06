import React, { useState } from 'react';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import Inventory from './component/Inventory/Inventory';
import Profile from './component/Profile/Profile';
import Skill from './component/Skill/Skill';
import Achievement from './component/Achievement/Achievement';
import NavBar from './NavBar';
import theme from './styles/theme';


function App() {
  const [page, setPage] = useState('profile')

  // 그래프의 처치가 어려워서 일단 패스...ㅠ
  // const LocalTheme = window.localStorage.getItem('theme') || 'light';
  // const [themeMode, setThemeMode] = useState(LocalTheme);


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
  * {
    box-sizing: border-box;
    font-family: "Neo둥근모Code";
  }
`
interface IMainBox {
  themeMode?: string;
}

const MainBox = styled.div<IMainBox>`
  max-width: ${ ({theme}) => theme.deviceSizes.pc };
  min-height: 90vh;
  margin: 0 auto;
  padding: 0 0 24px;
  border: ${ ({theme}) => theme.border.main };
  border-top: none;

  // 모바일사이즈 (pc 이하일때)
  @media ${ ({theme}) => theme.device.pc } {
    max-width: ${ ({theme}) => theme.deviceSizes.mobileL };
  }
`

export const TitleBox = styled.div`
  position: relative;
  border-bottom: ${ ({theme}) => theme.border.main };
  margin: 0 12px;
  padding: 8px 0 0;

  h1 {
    display: inline-block;
    margin: 6px;
  }
  span {
    font-weight: 600;
    font-size: ${ ({ theme }) => theme.fontSizes.small }
  }
`

const ViewModeBtn = styled.span`
  position: absolute;
  top: 50%;
  right: 5%;
`
