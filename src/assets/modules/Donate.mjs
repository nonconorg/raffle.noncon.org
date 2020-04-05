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

    h2('NFT Raffles'),

    h3(Link({ to: '/terms/', text: 'Raffle ToS' })),

    p('Choose one of the Mintbase tokens below to enter one (or both) of the raffles.'),

    h2(
      Link({
        text: 'Shift Crypto Wallet Raffle NFT',
        to:
          'https://mintbase.io/pez-dispenser/0x0b23ad11e92fdf87eb5c9b0f24b9860f9c4689ee/OjZ2GaixwXmjOwM6Tgsw',
      }),
    ),
    p(
      'This Mintbase NFT represents a raffle ticket offering the chance to win 1 of 6 Shift Crypto Wallets.',
    ),

    h2(
      Link({
        text: 'Status Keycard raffle NFT',
        to:
          'https://mintbase.io/pez-dispenser/0x0b23ad11e92fdf87eb5c9b0f24b9860f9c4689ee/SknAvIIUGxlvoU0iJ7XG',
      }),
    ),
    p(
      'This Mintbase NFT represents a raffle ticket offering the chance to win 1 of 10 Status Keycards.',
    ),
  ])

export const style = {
  '.List': {
    margin: '3em 0 0',
  },
}
