import {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function SearchBar(){

    const [input, setInput] = useState("");
    const navigate = useNavigate();


    const submitHandler=(e)=>{
        e.preventDefault();
        navigate('/daily/'+input);
    };

    return(
    <SearchArea>
        <h1>Search City</h1>
        <FormStyle onSubmit={submitHandler}>
            <input onChange={(e)=>setInput(e.target.value)} type="text" value={input}/>
        </FormStyle>
    </SearchArea>

    )
}

const FormStyle=styled.form`
display: flex;
justify-content: center;
align-items: center;
input{
    border:none;
    background:#155263;
    font-size:1.5rem;
    color:white
    border: none;
    border-radius:1rem;
    outline:none;
    padding: 10px 10px;
}
`;

const SearchArea = styled.div`
text-align: center;
margin-top:5rem;
`;

export default SearchBar;