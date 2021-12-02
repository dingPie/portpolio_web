import React from "react";
import styled from "styled-components";
import { SubTitle } from "./Profile";
import { Chart, registerables } from 'chart.js';
import { Radar } from "react-chartjs-2";
import { data, options, explData } from './StatusData.js'

Chart.register(...registerables); // 이거 안하면 오류난다...
Chart.defaults.scales.linear.min = 0;


const Status = () => {

  const explList = () => {
    return explData.map( v =>
      <ExplCate>
        <ExTheme>
          {v.label}
        </ExTheme>
        <ExContent>
          {v.expl}
        </ExContent>
     </ExplCate>
      )
  }


  return (
    <StatusBox>

      <GraphBox > 
        <SubTitle>Status</SubTitle>
        <Radar data={data} options={options}
          style={graghStyle}
        />
      </GraphBox>

      <ExplBox>
        <SubTitle> Status Explanation </SubTitle>
       {explList()}
      </ExplBox>

    </StatusBox>
  )
}
export default Status;

// 스타일 styled components
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
  /* height: 360px; */
  margin: 12px auto;
  border: ${ ({theme}) => theme.border.main };
  border-radius: 8px;
`


const graghStyle = { // Radar 그래프용 스타일, 이건 styled component 아님
  maxWidth: "400px",
  maxHeight: "340px",
  margin: "16px auto"
}


const ExplBox = styled.div`
  max-width: ${ ({theme}) => theme.deviceSizes.mobileL };
  width: 100%;
  margin: 12px auto;
  border: ${ ({theme}) => theme.border.main };
  border-radius: 8px;

`

const ExplCate = styled.div`
  margin: 12px 16px;
`
const ExTheme = styled.div`
  margin: 4px 0;
  font-weight: 600;
  border-bottom: ${ ({theme}) => theme.border.bottom };
`
const ExContent = styled.div`

`