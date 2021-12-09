import React, { useState, useEffect, useRef,  } from "react";
import styled, { keyframes, css } from "styled-components";
import { SubTitle } from './Profile'
import { InfoData } from "./InfoData";

const PicAndInfo = () => {
  const [photos, setPhotos] = useState('charactor')
  const timeRef = useRef<any>(null)

  useEffect(() => { 
      timeRef.current = setInterval(() => {
        // photos === 'ident' ? setPhotos('full'): setPhotos('ident')
        switch (photos) {
          case 'charactor':
            setPhotos('ident')
            return
          case 'ident':
            setPhotos('full')
            return
          case 'full':
            setPhotos('charactor')
            return
        }
      }, 7000)

      return () => {
        clearInterval(timeRef.current) // 위에 setInterval이 실행되고 삭제해줘야 중복 실행이 안된다.
      }
  }, [photos])


  return (
    <PicAndInfoBox>

      <PicBox>
      <SubTitle> Profile Ficture </SubTitle>

        <ButtonBox >
          <button onClick={ () => setPhotos('charactor')} > 1 </button>
          <button onClick={ () => setPhotos('ident')} > 2 </button>
          <button onClick={ () => setPhotos('full')} > 3 </button>
        </ButtonBox>

        <Picture animation>
         {/* 이렇게 했을때, 쉽게 Animation을 넣을 수 있다. */}

         { photos === 'charactor' ? <img src= {InfoData.photo.charactor} alt="" /> : null}
         { photos === 'ident' ? <img src= {InfoData.photo.ident} alt="" /> : null}
         { photos === 'full' ? <img src= {InfoData.photo.full} alt="" /> : null}

        </Picture>

          { photos === 'charactor' ? <p> {InfoData.comment.charactor} </p> : null}
          { photos === 'ident' ? <p> {InfoData.comment.ident} </p> : null}
          { photos === 'full' ? <p> {InfoData.comment.full} </p> : null}

      </PicBox>
      
      <InfoBox> 

        <SubTitle> Infomation </SubTitle>
        
        <InfoCate>
          <InTheme> Name.</InTheme>
          <InContent> {InfoData.name} </InContent> 
        </InfoCate>

        <InfoCate>
          <InTheme> Birth.</InTheme>
          <InContent> {InfoData.birth} </InContent> 
        </InfoCate>

        <InfoCate>
          <InTheme> Phone. </InTheme>
          <InContent> {InfoData.phoneNum} </InContent> 
        </InfoCate>

        <InfoCate>
          <InTheme> E-Mail. </InTheme>
          <InContent> {InfoData.email} </InContent> 
        </InfoCate>

        <InfoCate>
          <InTheme> Address. </InTheme>
          <InContent> {InfoData.address} </InContent> 
        </InfoCate>

        <InfoCate>
          <InTheme> Edu Background. </InTheme>
          <InContent> {InfoData.highSchool.name}, {InfoData.highSchool.date}, {InfoData.highSchool.major}, {InfoData.highSchool.state} </InContent> 
          <InContent> {InfoData.univ.name}, {InfoData.univ.date}, {InfoData.univ.major}, {InfoData.univ.state} </InContent> 
        </InfoCate>

        <InfoCate>
          <InTheme> Military Serv. </InTheme>
          <InContent> {InfoData.army.date} {InfoData.army.state} </InContent> 
        </InfoCate>

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

  /* 모바일 화면 */
  @media ${ ({theme}) => theme.device.pc } {
    column-gap: 24px;
  }
`
interface IPicBox {
  animation?: boolean;
}

// 사진
const PicBox = styled.div`
  position:relative;
  max-width: ${ ({theme}) => theme.deviceSizes.mobileL };
  width: 100%;
  
  margin: 12px auto;
  border: ${ ({theme}) => theme.border.main };
  border-radius: 4px;

  p {
    margin: 4px auto 12px;
    text-align: center;
  }

`
const Picture = styled.div<IPicBox>`
  width: 80%;
  height: 320px;
  text-align: center;
  margin: 0 auto;

  img {
    height: 90%;
    margin: 12px 0;

    ${ ({animation}) => animation && css`
    animation-name: ${boxFade};
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  `}
  }
`

const boxFade = keyframes`
  0% {
    opacity: 0;
    /* transform: scale(1.2); */
  }
  100% {
    opacity: 1;
  }
`

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 4%;
  top: 20%;

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
  /* height: 360px; */
  margin: 12px auto;
  /* padding: 12px 16px; */
  border: ${ ({theme}) => theme.border.main };
  border-radius: 8px;
`
const InfoCate = styled.div`
  margin: 16px;
`
const InTheme = styled.div`
  margin: 4px 0;
  font-weight: 600;
  border-bottom: ${ ({theme}) => theme.border.bottom };
`
const InContent = styled.div`
`