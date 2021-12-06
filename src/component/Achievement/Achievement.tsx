import React from "react";
import styled from "styled-components";
import TitleBox from "../Profile/Profile";
import { AchieveData } from "../Achievement/AchieveData";

const Achievement = () => {

  const achieveList = () => {
    return AchieveData.map( v => 
      <AchieveList>
        <img src={v.img} alt="" />
        <AchieveInfo>
          <ATitle> {v.title} </ATitle>
          <ADate> {v.date} </ADate>
          <AAchieve> {v.achieve} </AAchieve>
        </AchieveInfo>
    </AchieveList>
    ) 
  }
  // 온클릭으로 소개멘트 띄워주면 좋겠네
  // 혹은 사이즈 확장

  return (
    <AchieveBox>

      {achieveList()}

    </AchieveBox>
  )
}

export default Achievement;

const AchieveBox = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
  padding: 0 12px;

  @media ${ ({theme}) => theme.device.pc } {
    grid-template-columns: 1fr;
    column-gap: 24px;
  }
`

const AchieveList = styled.div`

  display: flex;
  height: 96px;
  margin: 12px 0 0;
  background: #ffffff;
  border-radius: ${ ({theme}) => theme.space.base }; //8px;

  img {
    width: 88px;
    margin: ${ ({theme}) => theme.space.medium } ; // 6, 16px
    padding: 0 ${ ({theme}) => theme.space.medium };
    border-right: 1px solid  ${ ({ theme }) => theme.colors.green_1 };
  }
`
const AchieveInfo = styled.div`
  width: 100%;
  /* padding: 4px; */
  border-radius: 0 8px 8px 0;
  border: ${ ({ theme }) => theme.border.main };
  border-left: none;

`
const ATitle = styled.div`
  font-size: ${ ({theme}) => theme.fontSizes.lg };
  margin: 6px 6px 2px;
`
const ADate = styled.div`
  font-size: ${ ({theme}) => theme.fontSizes.small };
  margin: 0 6px 8px;
`
const AAchieve = styled.div`
  margin: 0 6px 4px;
`