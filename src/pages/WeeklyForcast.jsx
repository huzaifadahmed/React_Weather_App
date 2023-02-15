import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ToggleButtons from './components/ToggleButtons';

function WeeklyForcast(){

    const [weathers, setWeathers] = useState([]);
    let params = useParams();
    let newArr=[];

    const getWeathers = async (city)=>{
        const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
        const weatherdata = await data.json();
        setWeathers(weatherdata.list);
        //console.log(weatherdata.list);
        //console.log(weatherdata.list[0].dt_txt);

    };

    useEffect(()=>{
        getWeathers(params.city);
    },[params.city]);
    
    for (let x=0; x<weathers.length;x+=10){
        newArr.push(weathers[x]);
    }

    return(
        <div>
            <SearchBar/>
            <ToggleButtons/>
            <CardArea>
                {
                    newArr.slice(0,5).map((day)=>{
                        return(
                            <WeatherCard 
                            time={day.dt_txt} 
                            weatherTitle={day.weather[0].main} 
                            temperature={Math.round(day.main.temp-273.15).toFixed(1)+" C"}  
                            humidity={day.main.humidity} 
                            pop={day.pop}
                            wind={day.wind.speed}
                            
                            />
                        );
                    })
                }

            </CardArea>
        </div>
    )
}

const CardArea=styled.div`
width:100%;
display:flex;
justify-content: center;
margin-top:50px;
`;

export default WeeklyForcast;