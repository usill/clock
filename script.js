function getZero(num){
    if(num >= 0 && num < 10)
        return `0${num}`
    else 
        return num
}
function newTime() {
    let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds()
        return {
            hh:hours,
            mm:minutes,
            ss:seconds
        }
} 
function setTimeToTimer(){
    date = newTime()
    time = document.querySelector('#time')
    time.textContent = `${getZero(date.hh)}:${getZero(date.mm)}:${getZero(date.ss)}`
}
function setTimeToClock(){
    date = newTime()
    let hh = (date.hh + 6) * 30,
        mm = (date.mm + 30) * 6,
        ss = (date.ss + 30) * 6
hr.style.transform = `rotateZ(${(hh) + (mm/24)}deg)`
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
}
function timerToClock(){
    if(timerObj.classList.contains('timer')){
        clearInterval(timer)
        time.textContent = ''
        setTimeToClock()
        timer = setInterval(setTimeToClock, 1000)
        timerObj.classList.remove('timer')
        timerObj.classList.add('clock')
        imgClock.style.display = 'block'
        mn.style.display = 'block'
        hr.style.display = 'block'
        sc.style.display = 'block'
    } else {
        timerObj.classList.remove('clock')
        timerObj.classList.add('timer')
        setTimeToTimer()
        timer = setInterval(setTimeToTimer, 1000)
        imgClock.style.display = 'none'
        mn.style.display = 'none'
        hr.style.display = 'none'
        sc.style.display = 'none'
    }
}
function changeColor(){
    let background = document.querySelector('.background')
    if(background.classList.contains('purp')){
        background.classList.remove('purp')
        background.classList.add('yell')
        lightBtn.classList.remove('yell')
        lightBtn.classList.add('purp')
        timerObj.classList.remove('purp')
        timerObj.classList.add('yell')
        hr.classList.remove('purp')
        hr.classList.add('yell')
        mn.classList.remove('purp')
        mn.classList.add('yell')
    } else{
        background.classList.remove('yell')
        background.classList.add('purp')
        lightBtn.classList.remove('purp')
        lightBtn.classList.add('yell')
        timerObj.classList.remove('yell')
        timerObj.classList.add('purp')
        hr.classList.remove('yell')
        hr.classList.add('purp')
        mn.classList.remove('yell')
        mn.classList.add('purp')
    }
}
setTimeToTimer()
let timer = setInterval(setTimeToTimer, 1000),
    timerObj = document.querySelector('.timer'),
    imgClock = document.querySelector('.image'),
    mn = document.querySelector('.min'),
    sc = document.querySelector('.sec'),
    hr = document.querySelector('.hr'),
    lightBtn = document.querySelector('.button')
lightBtn.addEventListener('click', changeColor)
timerObj.addEventListener('click', timerToClock)