let ledheart = 0
basic.forever(function () {
	
})
basic.forever(function () {
    basic.showIcon(IconNames.Square)
    for (let index = 0; index < 1e+93; index++) {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Confused)
    }
    basic.showIcon(IconNames.Confused)
    led.plot(9, 23)
    for (let index = 0; index < 13; index++) {
        ledheart = 190
        basic.pause(546)
    }
    datalogger.log(datalogger.createCV("146", 908))
    datalogger.log(datalogger.createCV("146", game.createSprite(90, 89)))
})
