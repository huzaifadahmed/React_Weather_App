import styled from 'styled-components';
import {useState} from 'react';
import {NavLink} from "react-router-dom";

function ToggleButtons(){

    const forcastTab= window.location.pathname.split('/')[1];
    const cityLocation = window.location.pathname.split('/')[2];

    const [activeTab, setActiveTab] = useState(forcastTab);

    return(
        <ButtonArea>
            <Button onClick={()=>setActiveTab('daily')} 
            className={activeTab==='daily' ?'active' :''}>
                <SLink to={"/daily/"+cityLocation}>Daily</SLink></Button>
                
            <Button onClick={()=>setActiveTab('weekly')} 
            className={activeTab==='weekly' ?'active' :''}>
                <SLink to={"/weekly/"+cityLocation}>Weekly</SLink></Button>
        </ButtonArea>

    )
}

const ButtonArea = styled.div`
display:flex;
justify-content: center;
margin-top:50px;

`;

const Button = styled.button`
border-radius:5px;
margin: 0 50px;
padding:10px;
font-size:20px;
font-weight:bold;
background:grey;
cursor: pointer;
:hover{
    box-shadow: 1px 1px;
}
&.active{
    background: #ff6f3c;
}
`;

const SLink = styled(NavLink)`
text-decoration: none;
background:none;
color:black;
`;


export default ToggleButtons;