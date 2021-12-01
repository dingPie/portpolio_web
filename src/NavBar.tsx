import React from "react";
import styled, { css } from 'styled-components'
import theme from './styles/theme'

interface NavProps {
  page: string;
  setPage: (value: string) => void;
}

const NavBar = ({ page, setPage }:NavProps ) => {
  console.log(page)
  return (
    <>
      <div className="nav-box">

        <NavBox>

          <NavBtn page='profile' nowPage={page} hover 
            onClick= {() => setPage('profile')}>
            Profile
          </NavBtn>

          <NavBtn page='skill' nowPage={page} hover 
            onClick= {() => setPage('skill')}>
            Skill
          </NavBtn>

          <NavBtn page='inventory' nowPage={page} hover 
            onClick= {() => setPage('inventory')}>
            Inventory
          </NavBtn>

          <NavBtn page='achievement' nowPage={page} hover
            onClick= {() => setPage('achievement')}>
            Achievement
          </NavBtn>

        </NavBox>

      </div>
    </>
  )
}
export default NavBar;


interface Ihover {
  nowPage: string;
  page: string;
  hover?: boolean;
};

const NavBox = styled.div`
  display: flex;
  width: 100%;
  max-width: ${ ({theme}) => theme.deviceSizes.pc };
  margin: 0 auto;
`

const NavBtn = styled.div<Ihover> `
  width: 100%;
  padding: ${ ({theme}) => theme.space.small };
  /* font-size: ${ ({theme}) => theme.fontSizes.xl }; */
  font-weight: 600;
  text-align: center;
  border:${ ({theme}) => theme.border.main };
  border-radius: 10px 10px 0 0;
  cursor: pointer;
  z-index: 2;

  /* 바텀 라인 */
  border-bottom: ${ ({nowPage, page}) => nowPage === page && 'none' };

  /* hoverOption */
  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        transition-duration: 0.3s;
        transform: scaleY(1.3);
        transform: translateY(-3px);
      }
    `}
`;

  /* {/* <div className='set-profile-btn' onClick= {() => setPage('profile')}> Profile </div>
  <div className='set-skill-btn' onClick= {() => setPage('skill')}> Skill </div>
  <div className='set-inventory-btn' onClick= {() => setPage('inventory')}> Inventory </div>
  <div className='set-title-btn' onClick= {() => setPage('title')}> Title </div> */