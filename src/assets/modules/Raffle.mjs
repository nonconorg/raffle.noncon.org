export const View = ({ state }) => {
  return div([
    h1('raffle'),
    state.raffle && state.raffle.tokens && ParticipantList(state.raffle.tokens)
  ])
}

export const state = {
  tokens: [
    { id: 0, tok: '0AAAA0' },
    { id: 1, tok: '1AAAAA1' },
    { id: 2, tok: '2AAAAA2' },
    { id: 3, tok: '3AAAAA3' },
    { id: 4, tok: '4AAAAA4' },
    { id: 5, tok: '5AAAAA5' },
    { id: 6, tok: '6AAAAA6' },
    { id: 7, tok: '7AAAAA7' },
    { id: 8, tok: '8AAAAA8' },
    { id: 9, tok: '9AAAAA9' },
    { id: 10, tok: 'AAAAAA' },
    { id: 11, tok: 'BAAAAAB' },
    { id: 12, tok: 'CAAAAAC' },
    { id: 13, tok: 'DAAAAAD' },
    { id: 14, tok: 'EAAAAAE' },
    { id: 15, tok: 'FAAAAAF' },
  ],
}

export const globals = {
  state: {
    raffle: true,
  },
}
