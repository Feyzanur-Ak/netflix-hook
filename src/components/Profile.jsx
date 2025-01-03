
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Card=styled.div`
padding:0.4rem;
width: 180px;

`;

const Avatar=styled.img`
width:100%;
border-radius:0.5rem;
box-sizing: border-box;
cursor: pointer;

&:hover{
    border:4px solid lightgray;
    border-radius: 0.5rem;
}
`;

const Title=styled.h2`
text-align:center;
color:lightgray;
font-weight: normal;
`;

const Profile = (props) => {

    const history = useHistory();

    const clickHandler = () => {
        setActiveProfile(profile);
        history.push("/hero");
      };
    
    
    // eslint-disable-next-line react/prop-types
    const {profile,setActiveProfile}=props

    // eslint-disable-next-line react/prop-types
    const {avatar,title,}=profile;
  return (
    <Card onClick={clickHandler}>
           <Avatar src={avatar} />
        <Title>{title}</Title>

    </Card>
  )
}

export default Profile
