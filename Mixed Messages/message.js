// a factory function that accepts "articles", "subjects",
// "nouns", "verbs","adjetives", "conectors", "questions",
// "signs" and "numbers" parameters to return a customized
// message constructor with random words
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
            places: ["beach", "city", "park", "office", "forest", "house"],
            cities: ["Mexico", "Paris", "New York", "Oslo", "Okinawa", "Bali", "Berlin", "Dublin"]
        },
        verbs: ["run", "watch", "cook", "see", "draw", "paint", "travel", "go"],
        adjetives: ["pretty", "good", "bad"],
        connectors: ["with", "but"],
        questions: ["what", "where", "why",],
        signs: [" ", ".", ":", ";", ",", "!", "?"],
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    }
}



