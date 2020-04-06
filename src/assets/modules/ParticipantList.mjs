export const View = ({ tokens = [], wins }, children) => {
  return ul({ class: 'ParticipantList' }, [
    li(h3('Sorry, all, better luck next time.')),
    li(h4('Other participants:')),
    tokens.map(({ tok, id }, i) => li({ class: `Participant p-${id}` }, tok)),
  ])
}

export const style = {
  '.Participant': {
    float: 'left',
    padding: '0.5em',
    fontSize: '0.5em',
    width: '105px',
  },
}
