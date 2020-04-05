export const View = () =>
  div({ class: 'Donate' }, [
    p([
      'If you feel like donating,',
      "we'll accept any token at the ",
      Link({ text: 'noncon.eth', to: 'https://etherscan.io/address/noncon.eth' }),
      ' address,',
      ' or you can contribute to our ',
      Link({
        text: 'interspace.chat gitcoin grant',
        to: 'https://gitcoin.co/grants/516/interspacechat?tab=description',
      }),
      ' and get those sweet sweet multiples during the 5th Matching Round.',
      "Those who don't have, or don't want a gitcoin account can donate directly to the ",
      Link({
        text: 'support.interspacechat.eth',
        to: 'https://etherscan.io/address/support.interspacechat.eth',
      }),
      ' address',
    ]),

    List({
      items: [
        {
          img: '/img/donate/gitcoin.png',
          to: 'https://gitcoin.co/grants/516/interspacechat',
          title: 'gitcoin grant',
        },
        {
          to: 'https://etherscan.io/enslookup?q=noncon.eth',
          img: '/img/donate/noncon.eth.png',
          title: 'noncon.eth',
        },
      ],
    }),

    Tokens(),
  ])

export const style = {
  '.List': {
    margin: '3em 0 0',
  },
}
