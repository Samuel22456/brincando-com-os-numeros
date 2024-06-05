let a = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    a = randint(0, 12)
    basic.showNumber(a)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(a * b)
})
input.onButtonPressed(Button.B, function () {
    b = randint(0, 12)
    basic.showNumber(b)
})
