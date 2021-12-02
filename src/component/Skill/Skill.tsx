import React from "react";
import styled from "styled-components";
import TitleBox from "../Profile/Profile";
import { SkillData } from "./SkillData";

const Skill = () => {

  const skillList = () => {
    return SkillData.map( v => 
      <SkillList>
        <img src={v.img} alt="" />
        <SkillInfo>
          <SName> {v.name} </SName>/ <SLv> Lv. {v.lv} </SLv>
          <SExplain> {v.explan} </SExplain>
        </SkillInfo>
      </SkillList>
      )
  }

  return (
    <SkillBox>

      {skillList()}
      
    </SkillBox>
  )
}

export default Skill;

const SkillBox = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
  padding: 0 12px;

  @media ${ ({theme}) => theme.device.pc } {
    grid-template-columns: 1fr;
    column-gap: 24px;
  }
`

const SkillList = styled.div`

  display: flex;
  height: 88px;
  margin: 12px 0 0;
  background: #ffffff;
  border-radius: ${ ({theme}) => theme.space.base }; //8px;

  img {
    margin: ${ ({theme}) => theme.space.medium } ; // 6, 16px
    padding: 0 ${ ({theme}) => theme.space.medium };
    border-right: 1px solid  ${ ({ theme }) => theme.colors.green_1 };
  }
`
const SkillInfo = styled.div`
  width: 100%;
  padding: 8px;
  border-radius: 0 8px 8px 0;
  border: ${ ({ theme }) => theme.border.main };
  border-left: none;

  span {
    display: inline-block;
    margin: ${ ({theme}) => theme.space.small };
  }
`
const SName = styled.div`
  display: inline-block;
  margin: ${ ({theme}) => theme.space.small };
`
const SLv = styled.div`
  display: inline-block;
  margin: ${ ({theme}) => theme.space.small };
`

const SExplain = styled.div`
  margin: ${ ({theme}) => theme.space.small };
`