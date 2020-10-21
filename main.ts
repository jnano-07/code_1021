basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            if (i % 2 == 0 && j % 2 == 0) {
                led.plot(i, j)
            } else if (i % 2 == 1 && j % 2 == 1) {
                led.plot(i, j)
            }
        }
    }
})
