import React from "react";
import styled from "styled-components";
import TitleBox from "../Profile/Profile";

const Skill = () => {


  return (
    <SkillBox>
      
      <SkillList>

        <img src="/logo192.png" alt="" />
        <SkillInfo>
          <span> React.js </span> / <span> Lv. low 5 </span>
          <SkillExplain> useState/Effect 등 CRUD 가능 </SkillExplain>
        </SkillInfo>

      </SkillList>

      <SkillList>

        <img src="/logo192.png" alt="" />
        <SkillInfo>
          <span> HTML5 </span> / <span> Lv. low 6 </span>
          <SkillExplain> 초급 어느정도 레벨입니다 </SkillExplain>
        </SkillInfo>
        
      </SkillList>

    </SkillBox>
  )
}

export default Skill;

const SkillBox = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
  padding: 0 12px;

  @media ${ ({theme}) => theme.device.tablet } {
    grid-template-columns: 1fr;
    column-gap: 24px;
  }
`

const SkillList = styled.div`

  display: flex;
  height: 72px;
  margin: 12px 0 0;
  background: #e8e8f8;
  border-radius: ${ ({theme}) => theme.space.base }; //8px;

  img {
    margin: ${ ({theme}) => theme.space.medium } ; // 6, 16px
    padding: 0 ${ ({theme}) => theme.space.medium };
    border-right: 1px solid  ${ ({ theme }) => theme.colors.green_1 };
  }
`
const SkillInfo = styled.div`
  width: 100%;
  border-radius: 0 8px 8px 0;
  border: ${ ({ theme }) => theme.border.main };
  border-left: none;

  span {
    display: inline-block;
    margin: ${ ({theme}) => theme.space.small };
  }
`

const SkillExplain = styled.div`
  margin: ${ ({theme}) => theme.space.small };
`