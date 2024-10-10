/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maryam Ergen
 * Created on: Oct 2024
 * This program plays rock paper scissors
*/

let randomNumber: number = 0
let currentScore: number

randomNumber = -1
currentScore = 0
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)

//if randomNumber was 0
    if (randomNumber == 0) {
        basic.showIcon(IconNames.SmallSquare)
    }

    //if randomNumber was 1
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
    }

    //if randomNumber was 2
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)

    }

    // pause and show you are ready again
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)

})

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    currentScore = currentScore + 1
    basic.showIcon(IconNames.Happy)

})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(1000)
    basic.showString("Score:" + (currentScore).toString())
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)

})
 