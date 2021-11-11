let pressure_value = 0
basic.forever(function () {
    pressure_value = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(pressure_value)
})
