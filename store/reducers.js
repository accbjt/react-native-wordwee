import wordList from './words.json'

const getRandomWord = () => {
  const randomNumber = Math.floor((Math.random() * wordList.words.length));

  return wordList.words[randomNumber]
}

export const youtube = (state = false, action) => {
  switch (action.type) {
    case 'VISIBLE':
      return action.value
    default:
      return state;
  }
};

export const words = (state = wordList, action) => {
  switch (action.type) {
    case 'NEW_WORD':
      return Object.assign({}, state, {
        currentWord: getRandomWord()
      })
    default:
      return Object.assign({}, state, {
        currentWord: getRandomWord()
      })
  }
};
