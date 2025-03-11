let stop = 0
let rechts = 0
let links = 0
let achteruit = 0
let strip: neopixel.Strip = null
let vooruit = 0
let IR_waarde = 0
IR.IR_init()
basic.forever(function () {
    if (IR_waarde == vooruit) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 25)
    }
    if (IR_waarde == achteruit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 25)
    }
    if (IR_waarde == links) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
    }
    if (IR_waarde == rechts) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
    }
    if (IR_waarde == stop) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.forever(function () {
    IR_waarde = IR.IR_read()
    vooruit = 47
    achteruit = 4
    links = 25
    rechts = 22
    stop = 15
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
})
