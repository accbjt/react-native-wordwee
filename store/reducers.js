import wordList from './words.json'

const shuffle = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const getRandomWords = (currentWord) => {
  const words = wordList.words
  const newWords = shuffle([
    ...words.slice(0, words.indexOf(currentWord)),
    ...words.slice(words.indexOf(currentWord) + 1)
  ])
  return shuffle([currentWord, newWords[0], newWords[newWords.length -1]])
}

const getRandomWord = () => {
  const randomNumber = Math.floor((Math.random() * wordList.words.length));

  return wordList.words[randomNumber]
}

const getRandomSearch = () => {
  const randomNumber = Math.floor((Math.random() * wordList.youtubeSearch.length));

  return wordList.youtubeSearch[randomNumber]
}

export const youtube = (state = false, action) => {
  switch (action.type) {
    case 'YOUTUBE_VISIBLE':
      return !state
    default:
      return state;
  }
};

export const words = (state = wordList, action) => {
  switch (action.type) {
    case 'NEW_WORD':
      return Object.assign({}, state, {
        currentWord: getRandomWord(),
      })
    case 'UPDATE_INPUT':
      return Object.assign({}, state, {
        inputValue: action.value,
      })
    case 'UPDATE_BUTTONS_VIEW':
      return Object.assign({}, state, {
        buttons: action.value,
      })
    case 'SHUFFLE_WORDS':
      return Object.assign({}, state, {
        buttonWords: getRandomWords(action.currentWord),
      })
    default:
      const randomWord = getRandomWord()

      return Object.assign({}, state, {
        currentWord: randomWord,
        inputBox: '',
        buttons: false,
        buttonWords: getRandomWords(randomWord)
      })
  }
};

export const youtubeSearch = (state = wordList, action) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return Object.assign({}, state, {
        search: getRandomSearch()
      })
    default:
      return Object.assign({}, state, {
        search: getRandomSearch()
      })
  }
};
