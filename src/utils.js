export  const time = () => {
    const curentTime = new Date()
    const h = curentTime.getHours()
    let day = curentTime.getDate()
    let month = curentTime.getMonth()+1
    const year = curentTime.getFullYear()
    let minutes = curentTime.getMinutes()
        if (minutes < 10) {
            minutes = '0'+minutes
        }
        if (day < 10) {
            day = '0'+day
        }
        if (month < 10) {
            month = '0'+ (month)
        }
    return  month +'.'+ day +'.'+ year + ' ' + h +':'+ minutes 
}

export const randomId = () => 
    Math.floor(Math.random()*100000)