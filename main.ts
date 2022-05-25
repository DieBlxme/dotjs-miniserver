let pixel = 3

while(true) {
    input.onButtonPressed(Button.B, function () {
        if(pixel == 5) {
            return;
        }else {
            pixel = pixel  + 1
            return;
        }
    })

    input.onButtonPressed(Button.A, function () {
        if(pixel == 1) {
            return;
        }else {
            pixel = pixel  - 1
            return;
        }
    })

    basic.showNumber(pixel)
}

