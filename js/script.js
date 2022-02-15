
const workTime = document.getElementById('workTime'); 
const workTimeLast = document.getElementById('workTimeLast'); 
const playTime = document.getElementById('playTime'); 
const playTimeLast = document.getElementById('playTimeLast'); 
const studyTime = document.getElementById('studyTime'); 
const studyTimeLast = document.getElementById('studyTimeLast');
const exerciseTime = document.getElementById('exerciseTime'); 
const exerciseTimeLast = document.getElementById('exerciseTimeLast'); 
const socialTime = document.getElementById('socialTime');
const socialTimeLast = document.getElementById('socialTimeLast');
const selfCareTime = document.getElementById('selfCareTime');
const selfCareTimeLast = document.getElementById('selfCareTimeLast');
const weeklyLink = document.querySelector('.weekly');
const dailyLink = document.querySelector('.daily');
const monthlyLink = document.querySelector('.monthly');




// fetch('http://localhost:8000/data.json')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         appendDataDaily(data);
//         appendDataWeekly(data);
//         appendDataMonthly(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
 
    appendDataDaily = (data) => {
        workTime.innerHTML = data[0].timeframes.daily.current + "hrs";
        workTimeLast.innerHTML = "Last Day - " + data[0].timeframes.daily.previous + "hrs";   
        
        playTime.innerHTML = data[1].timeframes.daily.current + "hrs";
        playTimeLast.innerHTML = "Last Day - " + data[1].timeframes.daily.previous + "hrs";   
        
        studyTime.innerHTML = data[2].timeframes.daily.current + "hrs";
        studyTimeLast.innerHTML = "Last Day - " + data[2].timeframes.daily.previous + "hrs"; 
        
        exerciseTime.innerHTML = data[3].timeframes.daily.current + "hrs";
        exerciseTimeLast.innerHTML = "Last Day - " + data[3].timeframes.daily.previous + "hrs";
        
        socialTime.innerHTML = data[4].timeframes.daily.current + "hrs";
        socialTimeLast.innerHTML = "Last Day - " + data[4].timeframes.daily.previous + "hrs";  

        selfCareTime.innerHTML = data[5].timeframes.daily.current + "hrs";
        selfCareTimeLast.innerHTML = "Last Day - " + data[5].timeframes.daily.previous + "hrs";  
    
    }

    const appendDataWeekly = (data) => {
        workTime.innerHTML = data[0].timeframes.weekly.current + "hrs";
        workTimeLast.innerHTML = "Last Week - " + data[0].timeframes.weekly.previous + "hrs"; 
        
        playTime.innerHTML = data[1].timeframes.weekly.current + "hrs";
        playTimeLast.innerHTML = "Last Week - " + data[1].timeframes.weekly.previous + "hrs"; 

        studyTime.innerHTML = data[2].timeframes.weekly.current + "hrs";
        studyTimeLast.innerHTML = "Last Week - " + data[2].timeframes.weekly.previous + "hrs";

        exerciseTime.innerHTML = data[3].timeframes.weekly.current + "hrs";
        exerciseTimeLast.innerHTML = "Last Week - " + data[3].timeframes.weekly.previous + "hrs";

        socialTime.innerHTML = data[4].timeframes.weekly.current + "hrs";
        socialTimeLast.innerHTML = "Last Week - " + data[4].timeframes.weekly.previous + "hrs";

        selfCareTime.innerHTML = data[5].timeframes.weekly.current + "hrs";
        selfCareTimeLast.innerHTML = "Last Week - " + data[5].timeframes.weekly.previous + "hrs";
    }

    appendDataMonthly = (data) => {
        workTime.innerHTML = data[0].timeframes.monthly.current + "hrs";
        workTimeLast.innerHTML = "Last Month - " + data[0].timeframes.monthly.previous + "hrs";  
        
        playTime.innerHTML = data[1].timeframes.monthly.current + "hrs";
        playTimeLast.innerHTML = "Last Month - " + data[1].timeframes.monthly.previous + "hrs"; 

        studyTime.innerHTML = data[2].timeframes.monthly.current + "hrs";
        studyTimeLast.innerHTML = "Last Month - " + data[2].timeframes.monthly.previous + "hrs";
        
        exerciseTime.innerHTML = data[3].timeframes.monthly.current + "hrs";
        exerciseTimeLast.innerHTML = "Last Week - " + data[3].timeframes.monthly.previous + "hrs";

        socialTime.innerHTML = data[4].timeframes.monthly.current + "hrs";
        socialTimeLast.innerHTML = "Last Week - " + data[4].timeframes.monthly.previous + "hrs";

        selfCareTime.innerHTML = data[5].timeframes.monthly.current + "hrs";
        selfCareTimeLast.innerHTML = "Last Week - " + data[5].timeframes.monthly.previous + "hrs";
    }



    daily = () => {
        weeklyLink.classList.remove("active");
        dailyLink.classList.add("active");
        monthlyLink.classList.remove("active");
        fetch('http://localhost:8000/data.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        appendDataDaily(data);
    })
    .catch((error) => {
        console.log(error);
    })

    }

    weekly = () => {
        weeklyLink.classList.add("active");
        dailyLink.classList.remove("active");
        monthlyLink.classList.remove("active");
        fetch('data.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        appendDataWeekly(data);
    })
    .catch((error) => {
        console.log(error);
    })

    }


    monthly = () => {
        weeklyLink.classList.remove("active");
        dailyLink.classList.remove("active");
        monthlyLink.classList.add("active");
        fetch('http://localhost:8000/data.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        appendDataDaily(data);
    })
    .catch((error) => {
        console.log(error);
    })

    }

    window.onload = weekly; 