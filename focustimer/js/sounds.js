export default function() {
    const buttonPressForest = new Audio("audio/Floresta.wav")
    const buttonPressCoffeeShop = new Audio("audio/Cafeteria.wav")
    const buttonPresRain = new Audio("audio/Chuva.wav")
    const buttonPressFireplace = new Audio("audio/Lareira.wav")

    function playMusic (data) {
        switch(data){
            case 'forest':
                stopMusic()
                buttonPressForest.play()
                break;
            case 'rain':
                stopMusic()
                buttonPresRain.play()
                break
            case 'coffeeshop':
                stopMusic()
                buttonPressCoffeeShop.play()
                break
            case 'fireplace':
                stopMusic()
                buttonPressFireplace.play()
                break
        }
    }

    function stopMusic() {
        buttonPressCoffeeShop.pause()
        buttonPresRain.pause()
        buttonPressFireplace.pause()
        buttonPressForest.pause()
    }

    return {
        playMusic,
        stopMusic
    }
}

    


