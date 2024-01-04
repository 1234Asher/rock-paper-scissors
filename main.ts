let Hand = 0
input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 3)
    if (Hand == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Heart)
    }
    basic.showIcon(IconNames.Scissors)
})
