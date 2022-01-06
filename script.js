window.onload=function(){
const weekly = document.getElementById('weekly');
const daily = document.getElementById('daily');
const monthly = document.getElementById('monthly');

const workHours = document.getElementById('work-hours');
const workEnd = document.getElementById('work-end');
const playHours = document.getElementById('play-hours');
const playEnd = document.getElementById('play-end');
const studyHours = document.getElementById('study-hours');
const studyEnd = document.getElementById('study-end');
const exerciseHours = document.getElementById('exercise-hours');
const exerciseEnd = document.getElementById('exercise-end');
const socialHours = document.getElementById('social-hours');
const socialEnd = document.getElementById('social-end');
const selfCareHours = document.getElementById('self-care-hours');
const selfCareEnd = document.getElementById('self-care-end');


daily.addEventListener('click', function(){
    resetColor();
    workHours.innerHTML = '5hrs';
    workEnd.innerHTML = 'Last Week - 7hrs';
    playHours.innerHTML = '1hrs';
    playEnd.innerHTML = 'Last Week - 2hrs';
    studyHours.innerHTML = '0hrs';
    studyEnd.innerHTML = 'Last Week - 1hrs';
    exerciseHours.innerHTML = '1hrs';
    exerciseEnd.innerHTML = 'Last Week - 1hrs';
    socialHours.innerHTML = '1hrs';
    socialEnd.innerHTML = 'Last Week - 3hrs';
    selfCareHours.innerHTML = '0hrs';
    selfCareEnd.innerHTML = 'Last Week - 1hrs';
    document.getElementById('daily').style.color = 'hsl(236, 100%, 87%)';
})

weekly.addEventListener('click', function(){
    resetColor();
    workHours.innerHTML = '32hrs';
    workEnd.innerHTML = 'Last Week - 36hrs';
    playHours.innerHTML = '10hrs';
    playEnd.innerHTML = 'Last Week - 8hrs';
    studyHours.innerHTML = '4hrs';
    studyEnd.innerHTML = 'Last Week - 7hrs';
    exerciseHours.innerHTML = '4hrs';
    exerciseEnd.innerHTML = 'Last Week - 5hrs';
    socialHours.innerHTML = '5hrs';
    socialEnd.innerHTML = 'Last Week - 10hrs';
    selfCareHours.innerHTML = '2hrs';
    selfCareEnd.innerHTML = 'Last Week - 2hrs';
    document.getElementById('weekly').style.color = 'hsl(236, 100%, 87%)';
})

monthly.addEventListener('click', function(){
    resetColor();
    workHours.innerHTML = '103hrs';
    workEnd.innerHTML = 'Last Week - 128hrs';
    playHours.innerHTML = '23hrs';
    playEnd.innerHTML = 'Last Week - 29hrs';
    studyHours.innerHTML = '13hrs';
    studyEnd.innerHTML = 'Last Week - 19hrs';
    exerciseHours.innerHTML = '11hrs';
    exerciseEnd.innerHTML = 'Last Week - 18hrs';
    socialHours.innerHTML = '21hrs';
    socialEnd.innerHTML = 'Last Week - 23hrs';
    selfCareHours.innerHTML = '7hrs';
    selfCareEnd.innerHTML = 'Last Week -11hrs';
    document.getElementById('monthly').style.color = 'hsl(236, 100%, 87%)';
})

function resetColor(){
    document.getElementById('daily').style.color = '#fff';
    document.getElementById('weekly').style.color = '#fff';
    document.getElementById('monthly').style.color = '#fff';
}

};

