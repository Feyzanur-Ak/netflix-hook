import {profileData} from "./ProfileData.js";
import Profile from "./Profile.jsx";
import styled from "styled-components";


const Container = styled.div`
display:flex ;
gap:1rem;
width:60%;
`;

const ProfileList = (props) => {

  // eslint-disable-next-line react/prop-types
  const {setActiveProfile}=props;
   
  return (
    <Container>
      {profileData.map((item)=>(

        <Profile key={item.id}  profile={item} setActiveProfile={setActiveProfile}/>

      ))}
    </Container>
  )
}

export default ProfileList
