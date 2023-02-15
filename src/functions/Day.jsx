
function Day ({time}){

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date(time);
    let day = weekday[d.getDay()];
    return(day);
}

export default Day;