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



