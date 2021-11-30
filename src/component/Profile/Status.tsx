import React from "react";
import styled from "styled-components";

const Status = () => {

  return (
    <StatusBox>
      <GraphBox > 표 </GraphBox>
      <ExplainBox> 설명 </ExplainBox>
    </StatusBox>
  )
}

export default Status;

const StatusBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 12px;
  padding: 0 12px;
  
  @media ${ ({theme}) => theme.device.tablet } {
    column-gap: 24px;
  }
`

const GraphBox = styled.div`
  max-width: ${ ({theme}) => theme.deviceSizes.mobileL };
  width: 100%;
  height: 360px;
  margin: 12px auto;
  background: #ece1a1;
`

const ExplainBox = styled.div`
  max-width: ${ ({theme}) => theme.deviceSizes.mobileL };
  width: 100%;
  height: 360px;
  margin: 12px auto;
  background: #cdffd0;

`