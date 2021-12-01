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
  /* 중앙에 뜨는걸로 하자 걍 */
  /*  뜨면 주변 어두워지고 */
  /* 사이즈는 두개로, 미디어쿼리 상황에따라 */
  position: absolute;
  z-index: 1;
  /* width: 240px; */
  /* height: 100%; */
  border: ${ ({theme}) => theme.border.main };
  border-radius: ${ ({theme}) => theme.space.medium };
  background: #fff2a9;
  top: ${ ({position}) => position[0]! + 120 }px; // 확정할당연산자를 이용해 undefined 상황 없애기
  left: ${ ({position}) => position[1]! - 24 }px;
`;

const InventLinks = styled.div`
  display: flex;
  justify-content: space-around;

  a {
    width: 100px;
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