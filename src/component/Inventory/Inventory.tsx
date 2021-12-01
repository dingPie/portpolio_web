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
  const [Data, setData] = useState<IInvenData[]>(invenData)
  const [clickData, setClickData] = useState<HTMLElement | null>(null)
  const [onInvenModal, setOnInvenModal] = useState(false)

  const invenItems = () => {
    return Data.map( (v:IInvenData) => 
      <InvenItems id={v.name} >
        <img src={v.img} id={v.name} alt={v.name}
        onClick={ (e) => onclickHendler(e) }
        />
      </InvenItems>
    )
  }

  const onclickHendler = (e: React.MouseEvent<HTMLImageElement>) => {
    const eTarget = e.target as HTMLElement;
    let targetData = Data.filter( v => v.name === eTarget.id )[0]
    setClickData(eTarget)
    setOnInvenModal(!onInvenModal)
    // console.log(eTarget.offsetLeft)
    console.log(eTarget.offsetTop)
  }

  useEffect(() => {
    console.log(clickData)
  }, [clickData])

  return (
    <IneventoryBox>

      { onInvenModal && <InvenModal clickData={clickData} /> }

      {invenItems()}
      {invenItems()}  {invenItems()}  {invenItems()}  {invenItems()}  {invenItems()} {invenItems()} {invenItems()}  {invenItems()}
      {invenItems()}  {invenItems()}

    </IneventoryBox>
  )
}

export default Inventory;


const IneventoryBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr) ;
  column-gap: 24px;
  row-gap: 12px;
  padding: 0 12px 24px;
  margin: 12px 0;
  
  @media ${ ({theme}) => theme.device.tablet } {
    grid-template-columns: repeat(3, 1fr) ;
    column-gap: 24px;
    /* row-gap: 24px; */
  }

`
const InvenItems = styled.div`
  width: 100%;
  height: 90%;
  max-width: 140px;
  max-height: 140px;
  margin: 12px auto 0;
  border-radius: ${ ({theme}) => theme.space.lg };
  background: #e5f3d4;
  cursor: pointer;

  img {
    width: 100%;
    height: 90%;
    padding-top: 4%;
    max-width: 140px;
    max-height: 140px;
  }
`