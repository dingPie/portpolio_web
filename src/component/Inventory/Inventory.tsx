import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { invenData } from "./InvenData";
import InvenModal from "./InvenModal";


interface IInvenData {
  name: string;
  img: string;
  explan: string;
  git: string;
  distribute?: string;
}
export const defalutData = {
  name: '',
  img: '',
  explan: '',
  git: '',
}


const Inventory = () => {
  // const [Data, setData] = useState<IInvenData[]>(invenData)
  const [clickData, setClickData] = useState<HTMLElement | null>(null)
  const [onInvenModal, setOnInvenModal] = useState(false)

  const invenItems = () => {
    return invenData.map( (v:IInvenData) => 
      <InvenItems id={v.name} >
        <img src={v.img} id={v.name} alt={v.name}
        onClick={ (e) => onclickHendler(e) }
        />
      </InvenItems>
    )
  }

  const onclickHendler = (e: React.MouseEvent<HTMLImageElement>) => {
    const eTarget = e.target as HTMLElement;
    setClickData(eTarget)
    setOnInvenModal(!onInvenModal)
  }

  return (
    <IneventoryBox>

      { onInvenModal && <InvenModal clickData={clickData} /> }
      { onInvenModal && <ModalBackgroundBox onClick= { () => setOnInvenModal(false)} ></ModalBackgroundBox> }

      {invenItems()}

    </IneventoryBox>
  )
}

export default Inventory;


const IneventoryBox = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr) ;
  column-gap: 24px;
  row-gap: 12px;
  align-content: start;

  padding: 0 12px 24px;
  margin: 12px 0;
  min-height: 86vh;
  
  @media ${ ({theme}) => theme.device.pc } {
    grid-template-columns: repeat(3, 1fr) ;
    column-gap: 12px;
    /* row-gap: 24px; */
  }

`
const InvenItems = styled.div`
  width: 95%;
  max-width: 132px;
  max-height: 132px;
  margin: 12px auto 0;

  border: ${ ({theme}) => theme.border.main };
  border-radius: ${ ({theme}) => theme.space.lg };
  background: #d4e8f3;
  cursor: pointer;

  &:hover {
    transition-duration: 0.3s;
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    max-width: 140px;
    max-height: 140px;
  }
`

const ModalBackgroundBox = styled.div`
  position: absolute;
  left: 0px;
  top: -77px;
  width: 100%;
  max-width: 1024px;
  height: 95vh;

  z-index: 1;
  background: rgba(0, 0, 0, 0.3);
`