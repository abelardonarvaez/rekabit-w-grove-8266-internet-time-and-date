input.onButtonPressed(Button.A, function () {
    esp8266.updateInternetTime()
    if (esp8266.isInternetTimeUpdated()) {
        basic.showString("" + (esp8266.getHour()))
        basic.showString(":")
        basic.showString("" + (esp8266.getMinute()))
        basic.showString(":")
        basic.showString("" + (esp8266.getSecond()))
    } else {
        basic.showString("Error")
    }
})
input.onButtonPressed(Button.B, function () {
    esp8266.updateInternetTime()
    if (esp8266.isInternetTimeUpdated()) {
        basic.showString("" + (esp8266.getWeekday()))
        basic.showString("/")
        basic.showString("" + (esp8266.getDay()))
        basic.showString("/")
        basic.showString("" + (esp8266.getMonth()))
        basic.showString("/")
        basic.showString("" + (esp8266.getYear()))
    } else {
        basic.showString("Error")
    }
})
esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
basic.showString("Initialize ")
if (esp8266.isESP8266Initialized()) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
esp8266.connectWiFi("", "")
basic.showString("Connecting")
if (esp8266.isWifiConnected()) {
    basic.showIcon(IconNames.Yes)
} else {
    basic.showIcon(IconNames.No)
}
esp8266.initInternetTime(-4)
if (esp8266.isInternetTimeInitialized()) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
