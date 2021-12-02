import React from "react";
import styled from "styled-components";
import { Chart, registerables } from 'chart.js';
import { Radar, Bar } from "react-chartjs-2";
import { data, options } from './StatusData.js'

Chart.register(...registerables); // 이거 안하면 오류난다...
Chart.defaults.scales.linear.min = 0;



const Status = () => {


  return (
    <StatusBox>

      <GraphBox > 
        <Radar data={data} options={options} style={{maxWidth: "400px", maxHeight: "340px", margin: "auto"}} />
      </GraphBox>

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
  
  @media ${ ({theme}) => theme.device.pc } {
    column-gap: 24px;
  }
`

const GraphBox = styled.div`
  max-width: ${ ({theme}) => theme.deviceSizes.mobileL };
  width: 100%;
  height: 360px;
  margin: 12px auto;
  background: #ece1a1;
  
  canvas {
    width: 360px;
  }
`

const ExplainBox = styled.div`
  max-width: ${ ({theme}) => theme.deviceSizes.mobileL };
  width: 100%;
  height: 360px;
  margin: 12px auto;
  background: #cdffd0;

`