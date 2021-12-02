import React from "react";
import styled from "styled-components";
import PicAndInfo from "./PicAndInfo";
import Status from "./Status";

const Profile = () => {

  return (
    <>
    <ProfileBox>
      <PicAndInfo></PicAndInfo>
      <Status></Status>
    </ProfileBox>
    </>
  )
}

export default Profile;

const ProfileBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${ ({theme}) => theme.device.pc } {
    column-gap: 24px;
    grid-template-columns: 1fr;
  }
`

export const SubTitle = styled.h2`
  margin: 12px 16px;
  padding: 4px 0 ;
  border-bottom: ${ ({theme}) => theme.border.main }
`

