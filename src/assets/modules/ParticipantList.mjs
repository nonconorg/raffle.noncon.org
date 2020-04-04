export const View = (tokens = [], prices = 6) => {
  return ul(
    tokens.map(({ tok, id }, i) => li({ class: `Participant p-${id}` }, [i < prices && 'WINNER: ', tok])),
  )
}
