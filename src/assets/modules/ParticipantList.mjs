export const View = ({tokens = [], wins}, children) => {
  return ul(
    tokens.map(({ tok, id }, i) => [
      i === 0 && children,

      i === wins && [
        li([h3('Sorry, all others, better luck next time.'), h4('Other participants:')]),
      ],

      li({ class: `Participant p-${id}` }, tok),
    ]),
  )
}
