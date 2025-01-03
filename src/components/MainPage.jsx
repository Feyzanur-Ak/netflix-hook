
import styled from "styled-components";
import wind from "../videos/wind.mp4"

const Video=styled.div`
width: 100vw;
aspect-ratio: 16/9;
`;


const MainPage = () => {
  return (
    <Video autoPlay muted>
<source src={wind} />
    </Video>
  )
}

export default MainPage
