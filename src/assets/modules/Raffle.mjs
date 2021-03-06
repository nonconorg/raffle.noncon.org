export const View = ({ state }) => {
  return div({ class: 'Raffle' }, [
    h1('raffle'),
    state.raffle &&
      Winners({ tokens: state.raffle.tokens.status, wins: state.raffle.wins.status }, [
        li([
          h3(
            Link({
              text: 'Status Keycard raffle NFT',
              to:
                'https://mintbase.io/pez-dispenser/0x0b23ad11e92fdf87eb5c9b0f24b9860f9c4689ee/SknAvIIUGxlvoU0iJ7XG',
            }),
          ),
          p([
            'This Mintbase NFT represents a raffle ticket',
            ' offering the chance to win 1 of 10 Status Keycards.',
          ]),
        ]),
        li(h3('Winners:')),
      ]),

    state.raffle &&
      Winners({ tokens: state.raffle.tokens.shift, wins: state.raffle.wins.shift }, [
        li([
          h3(
            Link({
              text: 'Shift Crypto Wallet Raffle NFT',
              to:
                'https://mintbase.io/pez-dispenser/0x0b23ad11e92fdf87eb5c9b0f24b9860f9c4689ee/OjZ2GaixwXmjOwM6Tgsw',
            }),
          ),

          p([
            'This Mintbase NFT represents a raffle ticket',
            ' offering the chance to win 1 of 6 Shift Crypto Wallets.',
          ]),
        ]),
        li(h3('Winners:')),
      ]),

    state.raffle &&
      ParticipantList({ tokens: state.raffle.tokens.status, wins: state.raffle.wins.status }),

    state.raffle &&
      ParticipantList({ tokens: state.raffle.tokens.shift, wins: state.raffle.wins.shift }),
  ])
}

export const state = {
  raffle: {
    wins: {
      status: 10,
      shift: 6,
    },
    tokens: {
      status: [
        { id: 0, tok: '0AAAA0STATUS' },
        { id: 1, tok: '1AAAAA1STATUS' },
        { id: 2, tok: '2AAAAA2STATUS' },
        { id: 3, tok: '3AAAAA3STATUS' },
        { id: 4, tok: '4AAAAA4STATUS' },
        { id: 5, tok: '5AAAAA5STATUS' },
        { id: 6, tok: '6AAAAA6STATUS' },
        { id: 7, tok: '7AAAAA7STATUS' },
        { id: 8, tok: '8AAAAA8STATUS' },
        { id: 9, tok: '9AAAAA9STATUS' },
        { id: 10, tok: 'AAAAAASTATUS' },
        { id: 11, tok: 'BAAAAABSTATUS' },
        { id: 12, tok: 'CAAAAACSTATUS' },
        { id: 13, tok: 'DAAAAADSTATUS' },
        { id: 14, tok: 'EAAAAAESTATUS' },
        { id: 15, tok: 'FAAAAAFSTATUS' },
        { id: 16, tok: '0AAAA0STATUS' },
        { id: 17, tok: '1AAAAA1STATUS' },
        { id: 18, tok: '2AAAAA2STATUS' },
        { id: 19, tok: '3AAAAA3STATUS' },
        { id: 20, tok: '4AAAAA4STATUS' },
        { id: 21, tok: '5AAAAA5STATUS' },
        { id: 22, tok: '6AAAAA6STATUS' },
        { id: 23, tok: '7AAAAA7STATUS' },
        { id: 24, tok: '8AAAAA8STATUS' },
        { id: 25, tok: '9AAAAA9STATUS' },
        { id: 26, tok: 'AAAAAASTATUS' },
        { id: 27, tok: 'BAAAAABSTATUS' },
        { id: 28, tok: 'CAAAAACSTATUS' },
        { id: 29, tok: 'DAAAAADSTATUS' },
        { id: 30, tok: 'EAAAAAESTATUS' },
        { id: 31, tok: 'FAAAAAFSTATUS' },
        { id: 32, tok: '0AAAA0STATUS' },
        { id: 33, tok: '1AAAAA1STATUS' },
        { id: 34, tok: '2AAAAA2STATUS' },
        { id: 35, tok: '3AAAAA3STATUS' },
        { id: 36, tok: '4AAAAA4STATUS' },
        { id: 37, tok: '5AAAAA5STATUS' },
        { id: 38, tok: '6AAAAA6STATUS' },
        { id: 39, tok: '7AAAAA7STATUS' },
        { id: 40, tok: '8AAAAA8STATUS' },
        { id: 41, tok: '9AAAAA9STATUS' },
        { id: 42, tok: 'AAAAAASTATUS' },
        { id: 43, tok: 'BAAAAABSTATUS' },
        { id: 44, tok: 'CAAAAACSTATUS' },
        { id: 45, tok: 'DAAAAADSTATUS' },
        { id: 46, tok: 'EAAAAAESTATUS' },
        { id: 47, tok: 'FAAAAAFSTATUS' },
        { id: 48, tok: '0AAAA0STATUS' },
        { id: 49, tok: '1AAAAA1STATUS' },
        { id: 50, tok: '2AAAAA2STATUS' },
        { id: 51, tok: '3AAAAA3STATUS' },
        { id: 52, tok: '4AAAAA4STATUS' },
        { id: 53, tok: '5AAAAA5STATUS' },
        { id: 54, tok: '6AAAAA6STATUS' },
        { id: 55, tok: '7AAAAA7STATUS' },
        { id: 56, tok: '8AAAAA8STATUS' },
        { id: 57, tok: '9AAAAA9STATUS' },
        { id: 58, tok: 'AAAAAASTATUS' },
        { id: 59, tok: 'BAAAAABSTATUS' },
        { id: 60, tok: 'CAAAAACSTATUS' },
        { id: 61, tok: 'DAAAAADSTATUS' },
        { id: 62, tok: 'EAAAAAESTATUS' },
        { id: 63, tok: 'FAAAAAFSTATUS' },
        { id: 64, tok: 'CAAAAACSTATUS' },
        { id: 65, tok: 'DAAAAADSTATUS' },
        { id: 66, tok: 'EAAAAAESTATUS' },
        { id: 67, tok: 'FAAAAAFSTATUS' },
        { id: 68, tok: 'CAAAAACSTATUS' },
        { id: 69, tok: 'DAAAAADSTATUS' },
        { id: 70, tok: 'EAAAAAESTATUS' },
        { id: 71, tok: 'EAAAAAESTATUS' },
        { id: 72, tok: 'EAAAAAESTATUS' },
        { id: 73, tok: 'EAAAAAESTATUS' },
        { id: 74, tok: 'EAAAAAESTATUS' },
        { id: 75, tok: 'EAAAAAESTATUS' },
        { id: 76, tok: 'EAAAAAESTATUS' },
        { id: 77, tok: 'EAAAAAESTATUS' },
        { id: 78, tok: 'EAAAAAESTATUS' },
        { id: 79, tok: 'EAAAAAESTATUS' },
        { id: 80, tok: 'EAAAAAESTATUS' },
        { id: 81, tok: 'EAAAAAESTATUS' },
        { id: 82, tok: 'EAAAAAESTATUS' },
        { id: 83, tok: 'EAAAAAESTATUS' },
        { id: 84, tok: 'EAAAAAESTATUS' },
        { id: 85, tok: 'EAAAAAESTATUS' },
        { id: 86, tok: 'EAAAAAESTATUS' },
        { id: 87, tok: 'EAAAAAESTATUS' },
        { id: 88, tok: 'EAAAAAESTATUS' },
        { id: 89, tok: 'EAAAAAESTATUS' },
        { id: 90, tok: 'EAAAAAESTATUS' },
        { id: 91, tok: 'EAAAAAESTATUS' },
        { id: 92, tok: 'EAAAAAESTATUS' },
        { id: 93, tok: 'EAAAAAESTATUS' },
        { id: 94, tok: 'EAAAAAESTATUS' },
        { id: 95, tok: 'EAAAAAESTATUS' },
        { id: 96, tok: 'EAAAAAESTATUS' },
        { id: 97, tok: 'EAAAAAESTATUS' },
        { id: 98, tok: 'EAAAAAESTATUS' },
        { id: 99, tok: 'EAAAAAESTATUS' },
      ],
      shift: [
        { id: 0, tok: '0AAAA0SHIFT' },
        { id: 1, tok: '1AAAAA1SHIFT' },
        { id: 2, tok: '2AAAAA2SHIFT' },
        { id: 3, tok: '3AAAAA3SHIFT' },
        { id: 4, tok: '4AAAAA4SHIFT' },
        { id: 5, tok: '5AAAAA5SHIFT' },
        { id: 6, tok: '6AAAAA6SHIFT' },
        { id: 7, tok: '7AAAAA7SHIFT' },
        { id: 8, tok: '8AAAAA8SHIFT' },
        { id: 9, tok: '9AAAAA9SHIFT' },
        { id: 10, tok: 'AAAAAASHIFT' },
        { id: 11, tok: 'BAAAAABSHIFT' },
        { id: 12, tok: 'CAAAAACSHIFT' },
        { id: 13, tok: 'DAAAAADSHIFT' },
        { id: 14, tok: 'EAAAAAESHIFT' },
        { id: 15, tok: 'FAAAAAFSHIFT' },
        { id: 16, tok: '0AAAA0SHIFT' },
        { id: 17, tok: '1AAAAA1SHIFT' },
        { id: 18, tok: '2AAAAA2SHIFT' },
        { id: 19, tok: '3AAAAA3SHIFT' },
        { id: 20, tok: '4AAAAA4SHIFT' },
        { id: 21, tok: '5AAAAA5SHIFT' },
        { id: 22, tok: '6AAAAA6SHIFT' },
        { id: 23, tok: '7AAAAA7SHIFT' },
        { id: 24, tok: '8AAAAA8SHIFT' },
        { id: 25, tok: '9AAAAA9SHIFT' },
        { id: 26, tok: 'AAAAAASHIFT' },
        { id: 27, tok: 'BAAAAABSHIFT' },
        { id: 28, tok: 'CAAAAACSHIFT' },
        { id: 29, tok: 'DAAAAADSHIFT' },
        { id: 30, tok: 'EAAAAAESHIFT' },
        { id: 31, tok: 'FAAAAAFSHIFT' },
        { id: 32, tok: '0AAAA0SHIFT' },
        { id: 33, tok: '1AAAAA1SHIFT' },
        { id: 34, tok: '2AAAAA2SHIFT' },
        { id: 35, tok: '3AAAAA3SHIFT' },
        { id: 36, tok: '4AAAAA4SHIFT' },
        { id: 37, tok: '5AAAAA5SHIFT' },
        { id: 38, tok: '6AAAAA6SHIFT' },
        { id: 39, tok: '7AAAAA7SHIFT' },
        { id: 40, tok: '8AAAAA8SHIFT' },
        { id: 41, tok: '9AAAAA9SHIFT' },
        { id: 42, tok: 'AAAAAASHIFT' },
        { id: 43, tok: 'BAAAAABSHIFT' },
        { id: 44, tok: 'CAAAAACSHIFT' },
        { id: 45, tok: 'DAAAAADSHIFT' },
        { id: 46, tok: 'EAAAAAESHIFT' },
        { id: 47, tok: 'FAAAAAFSHIFT' },
        { id: 48, tok: '0AAAA0SHIFT' },
        { id: 49, tok: '1AAAAA1SHIFT' },
        { id: 50, tok: '2AAAAA2SHIFT' },
        { id: 51, tok: '3AAAAA3SHIFT' },
        { id: 52, tok: '4AAAAA4SHIFT' },
        { id: 53, tok: '5AAAAA5SHIFT' },
        { id: 54, tok: '6AAAAA6SHIFT' },
        { id: 55, tok: '7AAAAA7SHIFT' },
        { id: 56, tok: '8AAAAA8SHIFT' },
        { id: 57, tok: '9AAAAA9SHIFT' },
        { id: 58, tok: 'AAAAAASHIFT' },
        { id: 59, tok: 'BAAAAABSHIFT' },
        { id: 60, tok: 'CAAAAACSHIFT' },
        { id: 61, tok: 'DAAAAADSHIFT' },
        { id: 62, tok: 'EAAAAAESHIFT' },
        { id: 63, tok: 'FAAAAAFSHIFT' },
        { id: 64, tok: 'CAAAAACSHIFT' },
        { id: 65, tok: 'DAAAAADSHIFT' },
        { id: 66, tok: 'EAAAAAESHIFT' },
        { id: 67, tok: 'FAAAAAFSHIFT' },
        { id: 68, tok: 'CAAAAACSHIFT' },
        { id: 69, tok: 'DAAAAADSHIFT' },
        { id: 70, tok: 'EAAAAAESHIFT' },
        { id: 71, tok: 'EAAAAAESHIFT' },
        { id: 72, tok: 'EAAAAAESHIFT' },
        { id: 73, tok: 'EAAAAAESHIFT' },
        { id: 74, tok: 'EAAAAAESHIFT' },
        { id: 75, tok: 'EAAAAAESHIFT' },
        { id: 76, tok: 'EAAAAAESHIFT' },
        { id: 77, tok: 'EAAAAAESHIFT' },
        { id: 78, tok: 'EAAAAAESHIFT' },
        { id: 79, tok: 'EAAAAAESHIFT' },
        { id: 80, tok: 'EAAAAAESHIFT' },
        { id: 81, tok: 'EAAAAAESHIFT' },
        { id: 82, tok: 'EAAAAAESHIFT' },
        { id: 83, tok: 'EAAAAAESHIFT' },
        { id: 84, tok: 'EAAAAAESHIFT' },
        { id: 85, tok: 'EAAAAAESHIFT' },
        { id: 86, tok: 'EAAAAAESHIFT' },
        { id: 87, tok: 'EAAAAAESHIFT' },
        { id: 88, tok: 'EAAAAAESHIFT' },
        { id: 89, tok: 'EAAAAAESHIFT' },
        { id: 90, tok: 'EAAAAAESHIFT' },
        { id: 91, tok: 'EAAAAAESHIFT' },
        { id: 92, tok: 'EAAAAAESHIFT' },
        { id: 93, tok: 'EAAAAAESHIFT' },
        { id: 94, tok: 'EAAAAAESHIFT' },
        { id: 95, tok: 'EAAAAAESHIFT' },
        { id: 96, tok: 'EAAAAAESHIFT' },
        { id: 97, tok: 'EAAAAAESHIFT' },
        { id: 98, tok: 'EAAAAAESHIFT' },
        { id: 99, tok: 'EAAAAAESHIFT' },
      ],
    },
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
            ...state.raffle.tokens,
            status,
            shift,
          },
        },
      }
    },
  },
}

export const subscriptions = [
  'actions.raffle.interval, { time: 5000, action: actions.raffle.update }',
]

export const global = {
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
