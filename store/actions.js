export const newWord = data => ({
  type: 'NEW_WORD'
});

export const youtubeVisible = data => ({
  type: 'YOUTUBE_VISIBLE'
});

export const updateIndex = (index) => ({
  type: 'UPDATE_INDEX',
  index,
});

export const updateButtonView = value => ({
  type: 'UPDATE_BUTTONS_VIEW',
  value,
});

export const shuffleWords = (currentWord) => ({
  type: 'SHUFFLE_WORDS',
  currentWord
});

export const shuffleLetters = (letter) => ({
  type: 'SHUFFLE_LETTERS',
  letter
});

export const checkIfMatching = (value) => {
  return (dispatch, getState) => {
    const state = getState()
    const { words: { currentLetterIndex, currentWord }} = state
    const currentLetter = currentWord[currentLetterIndex]

    if (value === currentLetter) {
      if (currentWord.length - 1 === currentLetterIndex) {
        dispatch(updateIndex(0))
        dispatch(updateButtonView(true))
      } else {
        dispatch(updateIndex(currentLetterIndex + 1))
      }
    } else {
      dispatch(shuffleLetters(currentLetter))
    }
  }
}
