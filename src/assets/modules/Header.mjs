export const View = () => {} /*(props = {}, children = []) => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { logo, menu, logotext, ...state } = props
  if (!logo && !menu && !logotext) {
    return
  }

  return header({ class: 'Header' }, [
    HeaderLogo({ root: state.root, theme: state.theme, img: logo, text: logotext }),
    menu && Menu({ state, items: menu }),
    children,
  ])
}

export const style = vars => ({
  maxWidth: vars.maxWidth,
  margin: '0 auto',
  display: 'block',
  padding: '1em 0',

  '.Logo': {
    float: 'none',
    display: 'inline-block',
  },
})

export const propTypes = {
  Header: [
    { key: 'logo', type: 'string' },
    { key: 'logotext', type: 'string' },
    { key: 'menu', type: 'array' },
  ],
}
*/
