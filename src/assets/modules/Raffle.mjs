export const View = ({ state }) => {
  return div({ class: 'Raffle' }, [
    h1('raffle'),
    state.raffle && ParticipantList(state.raffle.tokens.status),
    state.raffle && ParticipantList(state.raffle.tokens.shift),
  ])
}

export const state = {
  tokens: {
    wins: {
      status: 6,
      shift: 10,
    },
    status: [
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
      { id: 16, tok: '0AAAA0' },
      { id: 17, tok: '1AAAAA1' },
      { id: 18, tok: '2AAAAA2' },
      { id: 19, tok: '3AAAAA3' },
      { id: 20, tok: '4AAAAA4' },
      { id: 21, tok: '5AAAAA5' },
      { id: 22, tok: '6AAAAA6' },
      { id: 23, tok: '7AAAAA7' },
      { id: 24, tok: '8AAAAA8' },
      { id: 25, tok: '9AAAAA9' },
      { id: 26, tok: 'AAAAAA' },
      { id: 27, tok: 'BAAAAAB' },
      { id: 28, tok: 'CAAAAAC' },
      { id: 29, tok: 'DAAAAAD' },
      { id: 30, tok: 'EAAAAAE' },
      { id: 31, tok: 'FAAAAAF' },
      { id: 32, tok: '0AAAA0' },
      { id: 33, tok: '1AAAAA1' },
      { id: 34, tok: '2AAAAA2' },
      { id: 35, tok: '3AAAAA3' },
      { id: 36, tok: '4AAAAA4' },
      { id: 37, tok: '5AAAAA5' },
      { id: 38, tok: '6AAAAA6' },
      { id: 39, tok: '7AAAAA7' },
      { id: 40, tok: '8AAAAA8' },
      { id: 41, tok: '9AAAAA9' },
      { id: 42, tok: 'AAAAAA' },
      { id: 43, tok: 'BAAAAAB' },
      { id: 44, tok: 'CAAAAAC' },
      { id: 45, tok: 'DAAAAAD' },
      { id: 46, tok: 'EAAAAAE' },
      { id: 47, tok: 'FAAAAAF' },
      { id: 48, tok: '0AAAA0' },
      { id: 49, tok: '1AAAAA1' },
      { id: 50, tok: '2AAAAA2' },
      { id: 51, tok: '3AAAAA3' },
      { id: 52, tok: '4AAAAA4' },
      { id: 53, tok: '5AAAAA5' },
      { id: 54, tok: '6AAAAA6' },
      { id: 55, tok: '7AAAAA7' },
      { id: 56, tok: '8AAAAA8' },
      { id: 57, tok: '9AAAAA9' },
      { id: 58, tok: 'AAAAAA' },
      { id: 59, tok: 'BAAAAAB' },
      { id: 60, tok: 'CAAAAAC' },
      { id: 61, tok: 'DAAAAAD' },
      { id: 62, tok: 'EAAAAAE' },
      { id: 63, tok: 'FAAAAAF' },
      { id: 64, tok: 'CAAAAAC' },
      { id: 65, tok: 'DAAAAAD' },
      { id: 66, tok: 'EAAAAAE' },
      { id: 67, tok: 'FAAAAAF' },
      { id: 68, tok: 'CAAAAAC' },
      { id: 69, tok: 'DAAAAAD' },
      { id: 70, tok: 'EAAAAAE' },
      { id: 71, tok: 'EAAAAAE' },
      { id: 72, tok: 'EAAAAAE' },
      { id: 73, tok: 'EAAAAAE' },
      { id: 74, tok: 'EAAAAAE' },
      { id: 75, tok: 'EAAAAAE' },
      { id: 76, tok: 'EAAAAAE' },
      { id: 77, tok: 'EAAAAAE' },
      { id: 78, tok: 'EAAAAAE' },
      { id: 79, tok: 'EAAAAAE' },
      { id: 80, tok: 'EAAAAAE' },
      { id: 81, tok: 'EAAAAAE' },
      { id: 82, tok: 'EAAAAAE' },
      { id: 83, tok: 'EAAAAAE' },
      { id: 84, tok: 'EAAAAAE' },
      { id: 85, tok: 'EAAAAAE' },
      { id: 86, tok: 'EAAAAAE' },
      { id: 87, tok: 'EAAAAAE' },
      { id: 88, tok: 'EAAAAAE' },
      { id: 89, tok: 'EAAAAAE' },
      { id: 90, tok: 'EAAAAAE' },
      { id: 91, tok: 'EAAAAAE' },
      { id: 92, tok: 'EAAAAAE' },
      { id: 93, tok: 'EAAAAAE' },
      { id: 94, tok: 'EAAAAAE' },
      { id: 95, tok: 'EAAAAAE' },
      { id: 96, tok: 'EAAAAAE' },
      { id: 97, tok: 'EAAAAAE' },
      { id: 98, tok: 'EAAAAAE' },
      { id: 99, tok: 'EAAAAAE' },
    ],
    shift: [
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
      { id: 16, tok: '0AAAA0' },
      { id: 17, tok: '1AAAAA1' },
      { id: 18, tok: '2AAAAA2' },
      { id: 19, tok: '3AAAAA3' },
      { id: 20, tok: '4AAAAA4' },
      { id: 21, tok: '5AAAAA5' },
      { id: 22, tok: '6AAAAA6' },
      { id: 23, tok: '7AAAAA7' },
      { id: 24, tok: '8AAAAA8' },
      { id: 25, tok: '9AAAAA9' },
      { id: 26, tok: 'AAAAAA' },
      { id: 27, tok: 'BAAAAAB' },
      { id: 28, tok: 'CAAAAAC' },
      { id: 29, tok: 'DAAAAAD' },
      { id: 30, tok: 'EAAAAAE' },
      { id: 31, tok: 'FAAAAAF' },
      { id: 32, tok: '0AAAA0' },
      { id: 33, tok: '1AAAAA1' },
      { id: 34, tok: '2AAAAA2' },
      { id: 35, tok: '3AAAAA3' },
      { id: 36, tok: '4AAAAA4' },
      { id: 37, tok: '5AAAAA5' },
      { id: 38, tok: '6AAAAA6' },
      { id: 39, tok: '7AAAAA7' },
      { id: 40, tok: '8AAAAA8' },
      { id: 41, tok: '9AAAAA9' },
      { id: 42, tok: 'AAAAAA' },
      { id: 43, tok: 'BAAAAAB' },
      { id: 44, tok: 'CAAAAAC' },
      { id: 45, tok: 'DAAAAAD' },
      { id: 46, tok: 'EAAAAAE' },
      { id: 47, tok: 'FAAAAAF' },
      { id: 48, tok: '0AAAA0' },
      { id: 49, tok: '1AAAAA1' },
      { id: 50, tok: '2AAAAA2' },
      { id: 51, tok: '3AAAAA3' },
      { id: 52, tok: '4AAAAA4' },
      { id: 53, tok: '5AAAAA5' },
      { id: 54, tok: '6AAAAA6' },
      { id: 55, tok: '7AAAAA7' },
      { id: 56, tok: '8AAAAA8' },
      { id: 57, tok: '9AAAAA9' },
      { id: 58, tok: 'AAAAAA' },
      { id: 59, tok: 'BAAAAAB' },
      { id: 60, tok: 'CAAAAAC' },
      { id: 61, tok: 'DAAAAAD' },
      { id: 62, tok: 'EAAAAAE' },
      { id: 63, tok: 'FAAAAAF' },
      { id: 64, tok: 'CAAAAAC' },
      { id: 65, tok: 'DAAAAAD' },
      { id: 66, tok: 'EAAAAAE' },
      { id: 67, tok: 'FAAAAAF' },
      { id: 68, tok: 'CAAAAAC' },
      { id: 69, tok: 'DAAAAAD' },
      { id: 70, tok: 'EAAAAAE' },
      { id: 71, tok: 'EAAAAAE' },
      { id: 72, tok: 'EAAAAAE' },
      { id: 73, tok: 'EAAAAAE' },
      { id: 74, tok: 'EAAAAAE' },
      { id: 75, tok: 'EAAAAAE' },
      { id: 76, tok: 'EAAAAAE' },
      { id: 77, tok: 'EAAAAAE' },
      { id: 78, tok: 'EAAAAAE' },
      { id: 79, tok: 'EAAAAAE' },
      { id: 80, tok: 'EAAAAAE' },
      { id: 81, tok: 'EAAAAAE' },
      { id: 82, tok: 'EAAAAAE' },
      { id: 83, tok: 'EAAAAAE' },
      { id: 84, tok: 'EAAAAAE' },
      { id: 85, tok: 'EAAAAAE' },
      { id: 86, tok: 'EAAAAAE' },
      { id: 87, tok: 'EAAAAAE' },
      { id: 88, tok: 'EAAAAAE' },
      { id: 89, tok: 'EAAAAAE' },
      { id: 90, tok: 'EAAAAAE' },
      { id: 91, tok: 'EAAAAAE' },
      { id: 92, tok: 'EAAAAAE' },
      { id: 93, tok: 'EAAAAAE' },
      { id: 94, tok: 'EAAAAAE' },
      { id: 95, tok: 'EAAAAAE' },
      { id: 96, tok: 'EAAAAAE' },
      { id: 97, tok: 'EAAAAAE' },
      { id: 98, tok: 'EAAAAAE' },
      { id: 99, tok: 'EAAAAAE' },
    ],
  },
}

export const actions = {
  raffle: {
    interval: (dispatch, options) => {
      setInterval(() => dispatch(options.action), options.time)
    },

    update: state => {
      const status = state.raffle.tokens.status.sort((a, b) => Math.random() - Math.random())
      const shift = state.raffle.tokens.shift.sort((a, b) => Math.random() - Math.random())

      return {
        ...state,
        raffle: {
          ...state.raffle,
          tokens: {
              ...tokens,
              status,
              shift,
          },
        },
      }
    },
  },
}

export const subscriptions = [
  'actions.raffle.interval, { time: 10000, action: actions.raffle.update }',
]

export const globals = {
  state: {
    raffle: true,
  },
  actions: {
    raffle: true,
  },
}

export const style = vars => {
  const colors = [
    'AliceBlue',
    'AntiqueWhite',
    'Aqua',
    'Aquamarine',
    'Azure',
    'Beige',
    'Bisque',
    'BlanchedAlmond',
    'Blue',
    'BlueViolet',
    'Brown',
    'BurlyWood',
    'CadetBlue',
    'Chartreuse',
    'Chocolate',
    'Coral',
    'CornflowerBlue',
    'Cornsilk',
    'Crimson',
    'Cyan',
    'DarkBlue',
    'DarkCyan',
    'DarkGoldenRod',
    'DarkGrey',
    'DarkGreen',
    'DarkKhaki',
    'DarkMagenta',
    'DarkOliveGreen',
    'DarkOrange',
    'DarkOrchid',
    'DarkRed',
    'DarkSalmon',
    'DarkSeaGreen',
    'DarkSlateBlue',
    'DarkSlateGrey',
    'DarkTurquoise',
    'DarkViolet',
    'DeepPink',
    'DeepSkyBlue',
    'DodgerBlue',
    'FireBrick',
    'FloralWhite',
    'ForestGreen',
    'Fuchsia',
    'Gainsboro',
    'GhostWhite',
    'Gold',
    'GoldenRod',
    'Grey',
    'Green',
    'GreenYellow',
    'HoneyDew',
    'HotPink',
    'IndianRed',
    'Indigo',
    'Ivory',
    'Khaki',
    'Lavender',
    'LavenderBlush',
    'LawnGreen',
    'LemonChiffon',
    'LightBlue',
    'LightCoral',
    'LightCyan',
    'LightGoldenRodYellow',
    'LightGrey',
    'LightGreen',
    'LightPink',
    'LightSalmon',
    'LightSeaGreen',
    'LightSkyBlue',
    'LightSlateGrey',
    'LightSteelBlue',
    'LightYellow',
    'Lime',
    'LimeGreen',
    'Linen',
    'Magenta',
    'Maroon',
    'MediumAquaMarine',
    'MediumBlue',
    'MediumOrchid',
    'MediumPurple',
    'MediumSeaGreen',
    'MediumSlateBlue',
    'MediumSpringGreen',
    'MediumTurquoise',
    'MediumVioletRed',
    'MidnightBlue',
    'MintCream',
    'MistyRose',
    'Moccasin',
    'NavajoWhite',
    'Navy',
    'OldLace',
    'Olive',
    'OliveDrab',
    'Orange',
    'OrangeRed',
    'Orchid',
    'PaleGoldenRod',
    'PaleGreen',
    'PaleTurquoise',
    'PaleVioletRed',
    'PapayaWhip',
    'PeachPuff',
    'Peru',
    'Pink',
    'Plum',
    'PowderBlue',
    'Purple',
    'RebeccaPurple',
    'Red',
    'RosyBrown',
    'RoyalBlue',
    'SeaGreen',
    'SeaShell',
    'Sienna',
    'SkyBlue',
    'SlateBlue',
    'Snow',
    'SpringGreen',
    'SteelBlue',
    'Tan',
    'Teal',
    'Thistle',
    'Tomato',
    'Turquoise',
    'Violet',
    'Wheat',
    'White',
    'WhiteSmoke',
    'Yellow',
  ]

  const css = {}

  colors.forEach((color, i) => {
    css[`.p-${i}`] = {
      backgroundColor: color,
    }
  })

  return css
}
