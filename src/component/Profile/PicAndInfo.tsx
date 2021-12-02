import React, { useState, useEffect, useRef,  } from "react";
import styled, { keyframes, css } from "styled-components";
import { InfoData } from "./InfoData";

const PicAndInfo = () => {
  const [photos, setPhotos] = useState(InfoData.photo.ident)
  const timeRef = useRef<any> (null)

  // useEffect(() => { 
  //   const photo = InfoData.photo;
  //     timeRef.current = setInterval(() => {
  //       photos === photo.full ? setPhotos(photo.ident) : setPhotos(photo.full)
  //     }, 5000)

  //     return () => {
  //       clearInterval(timeRef.current) // 위에 setInterval이 실행되고 삭제해줘야 중복 실행이 안된다.
  //     }
  // }, [photos])

  return (
    <PicAndInfoBox>

      <PicBox>
        <ButtonBox >
          <button onClick={ () => setPhotos(InfoData.photo.ident)} > 1 </button>
          <button onClick={ () => setPhotos(InfoData.photo.full)} > 2 </button>
        </ButtonBox>
        <Picture active>
          <img src= {photos} alt="" />
        </Picture>
      </PicBox>
      
      <InfoBox> 
        인적사항
      </InfoBox>

    </PicAndInfoBox>
  )
}

export default PicAndInfo;

const PicAndInfoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 12px;
  padding: 0 12px;

  /* 768px 이하일때 */
  @media ${ ({theme}) => theme.device.pc } {
    column-gap: 24px;
  }
`
interface IPicBox {
  active?: boolean;
}

// 사진
const PicBox = styled.div`
  position:relative;
  max-width: ${ ({theme}) => theme.deviceSizes.mobileL };
  width: 80%;
  height: 320px;
  margin: 12px auto;
  border: ${ ({theme}) => theme.border.main };
  border-radius: 4px;

`
const Picture = styled.div<IPicBox>`
  width: 80%;
  height: 320px;
  text-align: center;
  margin: 0 auto;

  img {
    height: 90%;
    margin: 12px 0;
  }
/* 
    /* ${(props) => props.active && css`
    animation-name: ${boxFade};
    animation-duration: 1s;
    animation-delay: 4s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite; */
    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  `} */
`

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 2%;
  top: 3%;

  button {
    margin: 2px;
    border: ${ ({theme}) => theme.border.main };
    border-radius: 3px;

  }
  & :hover {
      transition-duration: 0.3s;
      transform: scale(1.1);
    }
`


const InfoBox = styled.div`
  max-width: ${ ({theme}) => theme.deviceSizes.mobileL };
  width: 100%;
  height: 360px;
  margin: 12px auto;
  background: #a8ccdd;
`
