//timer with typescript running on micro controller (32-bit ARM Cortex M0 processor (16MHz) CPU) Not compiled!
//Compile with Microsoft MakeCode (.hex)

let seconds = 0

basic.setLedColor(Colors.Green)
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    seconds = seconds + 1;
    basic.showNumber(seconds)
})
input.onButtonPressed(Button.A, function () {
    startTimer()
})

function startTimer() {
    basic.setLedColor(Colors.Red)
    while(seconds > 0) {
        basic.pause(1000)
            basic.clearScreen()
        seconds = seconds - 1;
        basic.showNumber(seconds)
    }
    basic.turnRgbLedOff()
    music.startMelody(music.builtInMelody(Melodies.Wedding))
}