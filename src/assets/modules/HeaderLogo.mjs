export const View = ({ branding, root, theme = 'light', logo }) =>
  Link({ to: root, class: 'Logo' }, Img(logo || `/noncon2020-logo-${theme}.png`))

export const style = vars => ({
  float: 'left',
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
