export const View = (tokens = []) => {
  return ul(
    tokens.map(({ tok, id }) => li({ class: `Participant p-${id}` }, ['participant: ', tok])),
  )
}
