const hoursHand = document.querySelector('.clock-h')
const minutesHand = document.querySelector('.clock-m')
const secondsHand = document.querySelector('.clock-s')
const dateFrame = document.querySelector('.clock-d')

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function clock() {
    let now = new Date()
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()

    let sAngle = s * 6
    let mAngle = m * 6 + s * .1
    let hAngle = h * 30 + m / 2
    
    let date = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
    let month = now.getMonth()

    secondsHand.style.transform = `rotate(${sAngle}deg)`
    minutesHand.style.transform = `rotate(${mAngle}deg)`
    hoursHand.style.transform = `rotate(${hAngle}deg)`

    dateFrame.textContent = `${monthNames[month]} ${date}`

    setTimeout(clock, 500)
}

clock()

//ДЗ:
//1. Сделать для минутной стрелки поправку на секунды
//2. Добавить блок с датой в формате "03.02" или "3 фев"
