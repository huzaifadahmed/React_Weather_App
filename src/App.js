import Pages from "./pages/Pages";
import {BrowserRouter} from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={"/"}>Weather</Logo>
        </Nav>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration:none;
font-size:2rem;
font-weight:600;
color:#ff6f3c;
padding: 2rem 4rem;

`;

const Nav = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
background-color: #155263;
`;

export default App;
