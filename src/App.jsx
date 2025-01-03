
import {BrowserRouter, Redirect, Route,  Switch} from "react-router-dom"
import Welcome from "./pages/Welcome"
import Login from "./pages/Login"
import Hero from "./pages/Hero"
import Header from "./components/Header"
import styled from "styled-components"
import { useState } from "react"



const Container=styled.div`
width: 100vw;
height: 100vh;
background-color: #1c1c1c;
`;
function App() {
const [activeProfile, setActiveProfile] = useState("");  //Burada amaç parent olarak kullandığımız Appden aktif profili göstermek için bir state tanımladık ve her sayfada bulunacak olan Headera activeProfile props olarak gönderilir.

  return (
    <Container>
  <BrowserRouter>
 <Header activeProfile={activeProfile}/>
 
 <Switch>
 <Route exact path="/" > 
    <Redirect to="/login"/>
    </Route>
<Route path="/login" > 
    <Login/>
    </Route>
<Route path="/welcome" > 

<Welcome setActiveProfile={setActiveProfile}/> </Route>

<Route path="/hero" > 
<Hero/>
</Route>
 </Switch>
 </BrowserRouter>
 </Container>
  )
}

export default App
