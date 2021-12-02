import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import defalutData from './Inventory';
import { invenData } from './InvenData'

interface IInvenModal {
  clickData: HTMLElement | null
}

const InvenModal = ( { clickData }: IInvenModal ) => {
  console.log(clickData?.offsetTop, clickData?.offsetLeft)
  // const [modalPosition, setModalPosition] = useState( [clickData?.offsetTop, clickData?.offsetLeft] )
  const [targetItem, settargetItem] = useState(invenData.filter( v => v.name === clickData!.id)[0] )

  return (
    <InvenModalBox> {/*  position= {modalPosition} */}

      <ItTheme> {targetItem.name}  </ItTheme>
      <ItExpl> {targetItem.explan} </ItExpl>

      <InventLinks>
        <a href={targetItem.git} target='_blank' >자세히 </a>
        {targetItem.distribute && <a href={targetItem.distribute} target='_blank'> 사용하기 </a>}
      </InventLinks>

    </InvenModalBox>
  )
}

export default InvenModal


// interface IInvenModalBox {
//   position: (number | undefined)[]
// };

const InvenModalBox = styled.div`
  width: 540px;
  min-height: 180px;
  border: ${ ({theme}) => theme.border.main };
  border-radius: 8px;
  background: white;

      
  /* 중앙정렬 이벤트  */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  @media ${ ({theme}) => theme.device.pc } {
    width: 360px;

  }

`;

const InventLinks = styled.div`
  display: flex;
  justify-content: space-evenly;

  a {
    width: 100px;
    margin: 0 0 12px;
    padding: 4px;
    text-align: center;
    text-decoration: none;
    background: lightblue;
    border-radius: 12px;
  }
`
const ItTheme = styled.div`
  margin: 12px;
  padding: 4px;
  font-weight: 600;
  font-size: ${ ({ theme }) => theme.fontSizes.xl };
  border-bottom: ${ ({ theme }) => theme.border.bottom };
`

const ItExpl = styled.div`
  margin: 12px 12px 36px;
  padding: 4px;
`

const Arrow = styled.div`
	width: 0;
	height: 0;
	border-bottom: 20px solid purple;/* 화살표 */
	border-left: 20px solid transparent;
	border-right: 20px solid transparent;
`;