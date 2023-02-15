import styled from 'styled-components';
import imageSelector from "../../functions/imageSelector";
import Day from '../../functions/Day';


function WeatherCard({time,weatherTitle,temperature,humidity,pop,wind}){

    
    return(
        <Card>
            <CardTitle>
                <h2>{time}</h2>
                <h2>{Day({time})}</h2>
                {imageSelector({weatherTitle})}
                <h3>{weatherTitle} </h3>
            </CardTitle>

            <CardDetails>
                <h4>Temperature: {temperature}</h4>
                <h4>Humidity: {humidity}</h4>
                <h4>p.o.p: {pop}</h4>
                <h4>Wind: {wind}</h4>
            </CardDetails>
        </Card>
    )
}



const Card=styled.div`
width:max;
height:max;
padding:0 2rem;
background:#ffc93c;
margin:10px 50px;
border-radius:20px;

`;

const CardTitle=styled.div`
text-align:center;
svg{
    font-size: 5rem;
}
`;

const CardDetails=styled.div`
margin-left:2px;
margin-right:2px;
padding:0.5rem 1rem;
border-radius:20px;
background: #ff9a3c;
line-height:0.3;
`;

export default WeatherCard;