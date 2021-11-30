import React from "react";
import styled from "styled-components";

const PicAndInfo = () => {

  return (
    <PicAndInfoBox>
      <PicBox > 사진 </PicBox>
      <InfoBox> 인적사항 </InfoBox>
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
  @media ${ ({theme}) => theme.device.tablet } {
    column-gap: 24px;
  }
`

const PicBox = styled.div`
  max-width: ${ ({theme}) => theme.deviceSizes.mobileL };
  width: 100%;
  height: 360px;
  margin: 12px auto;
  background: #d281e2;
`

const InfoBox = styled.div`
  max-width: ${ ({theme}) => theme.deviceSizes.mobileL };
  width: 100%;
  height: 360px;
  margin: 12px auto;
  background: #a8ccdd;

`