function writeCards(names, eventName) {

    let writeCardsDone = []
    for (let i = 0; i < names.length; i++){
        writeCardsDone.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
        console.log(writeCardsDone)
    }
    return writeCardsDone
}
    

function countDown(){
    let countDown = 10
    while (countDown > -1) {
        console.log(countDown)
        countDown--
      
    }
}