let Pressure_Value = 0
basic.forever(function () {
    Pressure_Value = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(Pressure_Value)
    if (Pressure_Value > 500) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
})
