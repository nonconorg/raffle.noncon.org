export const View = ({ branding, root }) =>
  Link({ to: root, class: 'Logo' }, Img('/img/NFT-raffle-hero.jpg'))

export const style = vars => ({
  float: 'none',
  display: 'inline-block',
  height: '2.4em',

  svg: {
    display: 'inline-block',
    width: '3em',
  },

  span: {
    '.Header &&': {
      lineHeight: 1,
      margin: '0.4em',
    },
  },
})
