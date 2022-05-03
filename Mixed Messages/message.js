// a factory function that accepts "articles", "subjects",
// "nouns", "verbs","adjetives", "conectors", "questions",
// "signs" and "numbers" parameters to return a customized
//  horoscope constructor with random words

let zodiacSigns = ['Capricorn', 'Aquarius', 'Leo', 'Pisces',
    'Saggitarius', 'Scorpio', 'Libra', 'Virgo', 'Leo',
'Cancer','Gemini', 'Taurus','Aries'];

const messageBuilder = () => {
    return {
        articles: ["the", "a", "an"],
        subjects: {
            personal: ["I", "you", "he", "she", "it", "they", "we", "yours"],
            posesives: ["my", "your", "his", "her", "its", "our", "their", "yours"]
        },
        nouns: {
            animals: ["cat", "dog", "horse", "fish", "bear", "cow", "pig", "elephant"],
            home: ["kitchen", "garden", "office", "room", "bath", "bedroom"],
            places: [" at the beach", "at the city", "at the park", "at the office", "at work", "forest", "house"],
            cities: ["Mexico", "Paris", "New York", "Oslo", "Okinawa", "Bali", "Berlin", "Dublin"]
        },
        verbs: ["run", "watch", "cook", "see", "draw", "paint", "travel", "go"],
        futureVerbs: ["will be", "could be", "may be"],
        adjetives: ["pretty", "good", "bad", "energetic", "busy", "relaxed","playful"],
        connectors: ["with", "but"],
        questions: ["what", "where", "why",],
        signs: [" ", ".", ":", ";", ",", "!", "?"],
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        weeklyHoroscope: function() {
            return this.futureVerbs +
        },
    }
}

// Iterate over the object considering the array length
  for(let item in collectiveAdvice) {
    let optionIdx = generateRandomNumber(collectiveAdvice[item].length)
  
    // use the object's properties to customize the message being added to collectiveAdvice 
    switch(item) {
      case 'programLanguage':
        nextStep.push(`Your skill path right now is a "${collectiveAdvice[item][optionIdx]}".`)
        break
      case 'level':
        nextStep.push(`Your next target should be: "${collectiveAdvice[item][optionIdx]}".`)
        break
      case 'tip':
        nextStep.push(`You should: "${collectiveAdvice[item][optionIdx]}".`)
        break
      default:
        nextStep.push('There is not enough info.')
    }
  }

//future + adjetives + places


let zodiacMessage = "You" + "this week. You";

console.log(zodiacMessage);
