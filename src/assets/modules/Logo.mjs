export const View = ({ branding, root, logo }) =>
  Link({ to: root, class: 'Logo' }, Img(logo || `/noncon2020-logo-light.png`))

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
