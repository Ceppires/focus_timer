export default function({
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace
}) {

    function addBg (data) {
        switch(data){
            case 'forest':
                removeBg()
                buttonForest.classList.add('bg-image')
                break
            case 'rain':
                removeBg()
                buttonRain.classList.add('bg-image')
                break
            case 'coffeeshop':
                removeBg()
                buttonCoffeeShop.classList.add('bg-image')
                break
            case 'fireplace':
                removeBg()
                buttonFireplace.classList.add('bg-image')
                break
        }
    }

    function removeBg () {
        buttonForest.classList.remove('bg-image')
        buttonRain.classList.remove('bg-image')
        buttonCoffeeShop.classList.remove('bg-image')
        buttonFireplace.classList.remove('bg-image')
    }

    return {
        addBg
    }
}