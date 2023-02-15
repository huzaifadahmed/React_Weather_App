import { WiDaySunny, WiDayCloudy, WiRainMix, WiThunderstorm, WiSnow, WiFog } from "react-icons/wi";

function imageSelector({weatherTitle}){

    if(weatherTitle==="Snow"){
        return <WiSnow/>;
    }
    else if(weatherTitle==="Clouds"){
        return <WiDayCloudy/>;
    }
    else if(weatherTitle==="Thunderstorm"){
        return <WiThunderstorm/>;
    }
    else if(weatherTitle==="Drizzle"||"Rain"){
        return <WiRainMix/>;
    }
    else if(weatherTitle==="Clear"){
        return <WiDaySunny/>;
    }
    else if(weatherTitle==="Atmosphere"){
        return <WiFog/>;
    }

}

export default imageSelector;