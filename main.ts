radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
radio.onReceivedString(function () {
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
    record.playAudio(record.BlockingState.Blocking)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("" + (adio))
    record.playAudio(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    record.startRecording(record.BlockingState.Blocking)
    record.playAudio(record.BlockingState.Blocking)
    basic.clearScreen()
})
let adio = 0
music.setVolume(255)
