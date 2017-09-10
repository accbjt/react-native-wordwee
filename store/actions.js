export const newWord = data => ({
  type: 'NEW_WORD'
});

export const youtubeVisible = data => ({
  type: 'YOUTUBE_VISIBLE'
});

export const youtubeVisible = value => ({
  type: 'UPDATE_INPUT',
  value,
});

export const updateButtonView = value => ({
  type: 'UPDATE_BUTTONS_VIEW',
  value,
});

export const shuffleWords = (currentWord) => ({
  type: 'SHUFFLE_WORDS',
  currentWord
});
