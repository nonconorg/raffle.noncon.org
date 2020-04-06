export const View = (raffle, children) => {
  return div({ class: 'Winners' }, [
    children,
    raffle.tokens
      .filter((_, i) => i < raffle.wins)
      .map(({ tok, id }, i) => li({ class: `Winner p-${id}` }, tok)),
  ])
}

export const style = {
  float: 'left',
  width: '40%',
  margin: '0 2.5%',
  listStyle: 'none',
}
