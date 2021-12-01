import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import defalutData from './Inventory';
import { invenData } from './InvenData'

interface IInvenModal {
  clickData: HTMLElement | null
}

const InvenModal = ( { clickData }: IInvenModal ) => {
  console.log(clickData?.offsetTop, clickData?.offsetLeft)
  const [modalPosition, setModalPosition] = useState( [clickData?.offsetTop, clickData?.offsetLeft] )
  const [targetItem, settargetItem] = useState(invenData.filter( v => v.name === clickData!.id)[0] )

  useEffect(() => {
    console.log(modalPosition[0], modalPosition[1])
    console.log(targetItem)
  }, [])

  return (
    <InvenModalBox position= {modalPosition}>
      <p> {targetItem.name}  </p>
      <p> {targetItem.explan} </p>
      <InventLinks>
        <a href={targetItem.git} target='_blank' >자세히 </a>
        {targetItem.distribute && <a href={targetItem.distribute} target='_blank'> 사용하기 </a>}
      </InventLinks>
    </InvenModalBox>
  )
}

export default InvenModal


interface IInvenModalBox {
  position: (number | undefined)[]
};

const InvenModalBox = styled.div<IInvenModalBox>`
    
  /* 중앙정렬 이벤트  */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  width: 480px;
  border: ${ ({theme}) => theme.border.main };
  border-radius: ${ ({theme}) => theme.space.medium };
  background: #fff2a9;

  @media ${ ({theme}) => theme.device.tablet } {
    width: 320px;
  }

    /* position: absolute; */
  /* top: ${ ({position}) => position[0]! + 120 }px; // 확정할당연산자를 이용해 undefined 상황 없애기
  left: ${ ({position}) => position[1]! - 24 }px; */

`;

const InventLinks = styled.div`
  display: flex;
  justify-content: space-around;

  a {
    width: 100px;
    margin: 0 0 12px;
    text-align: center;
    text-decoration: none;
    background: coral;
  }
`

const Arrow = styled.div`
	width: 0;
	height: 0;
	border-bottom: 20px solid purple;/* 화살표 */
	border-left: 20px solid transparent;
	border-right: 20px solid transparent;
`;