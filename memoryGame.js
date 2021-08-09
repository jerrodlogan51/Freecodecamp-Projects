document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'Midoriya',
        img: 'memoryGameCards/IzukuMidoriya.png'
      },
      {
        name: 'Bakugo',
        img: 'memoryGameCards/KatsukiBakugo.png'
      },
      {
        name: 'ice-cream',
        img: 'memoryGameCards/OchakoUraraka.png'
      },
      {
        name: 'pizza',
        img: 'memoryGameCards/TenyaIida.png'
      },
      {
        name: 'milkshake',
        img: 'memoryGameCards/TsuyuAsui.png'
      },
      {
        name: 'hotdog',
        img: 'memoryGameCards/MinaAshido.png'
      },
      {
        name: 'Jiro',
        img: 'memoryGameCards/KyokaJiro.png'
      },
      {
        name: 'Sato',
        img: 'memoryGameCards/RikidoSato.png'
      },
      {
        name: 'Momo',
        img: 'memoryGameCards/MomoYaoyarozu.png'
      },
      {
        name: 'Invisibitch',
        img: 'memoryGameCards/ToruHagakure.png'
      },
      {
        name: 'Shoto',
        img: 'memoryGameCards/ShotoTodoroki.png'
      },
      {
        name: 'Aoyama',
        img: 'memoryGameCards/YuugoAoyama.png'
      },
      {
        name: 'Koda',
        img: 'memoryGameCards/kojiKoda.png'
      },
      {
        name: 'Tokoyami',
        img: 'memoryGameCards/FumikageTokoyami.png'
      },
      {
        name: 'Kaminari',
        img: 'memoryGameCards/DenkiKaminari.png'
      },
      {
        name: 'Shoji',
        img: 'memoryGameCards/MezoShoji.png'
      },
      {
        name: 'Kirishima',
        img: 'memoryGameCards/EijiroKirishima.png'
      },
      {
        name: 'Sero',
        img: 'memoryGameCards/HantaSero.png'
      },
      {
        name: 'Mineta',
        img: 'memoryGameCards/MinoruMineta.png'
      },
      {
        name: 'Ojiro',
        img: 'memoryGameCards/MashiraoOjiro.png'
      },
      {
        name: 'Midoriya',
        img: 'memoryGameCards/IzukuMidoriya.png'
      },
      {
        name: 'Bakugo',
        img: 'memoryGameCards/KatsukiBakugo.png'
      },
      {
        name: 'ice-cream',
        img: 'memoryGameCards/OchakoUraraka.png'
      },
      {
        name: 'pizza',
        img: 'memoryGameCards/TenyaIida.png'
      },
      {
        name: 'milkshake',
        img: 'memoryGameCards/TsuyuAsui.png'
      },
      {
        name: 'hotdog',
        img: 'memoryGameCards/MinaAshido.png'
      },
      {
        name: 'Jiro',
        img: 'memoryGameCards/KyokaJiro.png'
      },
      {
        name: 'Sato',
        img: 'memoryGameCards/RikidoSato.png'
      },
      {
        name: 'Momo',
        img: 'memoryGameCards/MomoYaoyarozu.png'
      },
      {
        name: 'Invisibitch',
        img: 'memoryGameCards/ToruHagakure.png'
      },
      {
        name: 'Shoto',
        img: 'memoryGameCards/ShotoTodoroki.png'
      },
      {
        name: 'Aoyama',
        img: 'memoryGameCards/YuugoAoyama.png'
      },
      {
        name: 'Koda',
        img: 'memoryGameCards/kojiKoda.png'
      },
      {
        name: 'Tokoyami',
        img: 'memoryGameCards/FumikageTokoyami.png'
      },
      {
        name: 'Kaminari',
        img: 'memoryGameCards/DenkiKaminari.png'
      },
      {
        name: 'Shoji',
        img: 'memoryGameCards/MezoShoji.png'
      },
      {
        name: 'Kirishima',
        img: 'memoryGameCards/EijiroKirishima.png'
      },
      {
        name: 'Sero',
        img: 'memoryGameCards/HantaSero.png'
      },
      {
        name: 'Mineta',
        img: 'memoryGameCards/MinoruMineta.png'
      },
      {
        name: 'Ojiro',
        img: 'memoryGameCards/MashiraoOjiro.png'
      },
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'memoryGameCards/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'memoryGameCards/blank.png')
        cards[optionTwoId].setAttribute('src', 'memoryGameCards/blank.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'memoryGameCards/correct.png')
        cards[optionTwoId].setAttribute('src', 'memoryGameCards/correct.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'memoryGameCards/blank.png')
        cards[optionTwoId].setAttribute('src', 'memoryGameCards/blank.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })

  /*Now what I want to do with this in the future is make this a bit more automatic. This is a reminder to return to this and add the following:
  1. Add a feature that tracks how many times you got the matches wrong
  2. make it so that the game ends if you get a certain amount wrong.
  3. allow users to set the limit for how many incorrect guesses they can have.
  4. have a victory animation if the user gets them all correct.
  5. set music to the game that plays when you win*/