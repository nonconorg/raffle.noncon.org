export const View = (tokens = [], prices = [6, 16]) => {
  return ul(
    tokens.map(({ tok, id }, i) => [
      i === 0 && [
        li([
          h3(
            Link({
              text: 'Status Keycard raffle NFT',
              to:
                'https://mintbase.io/pez-dispenser/0x0b23ad11e92fdf87eb5c9b0f24b9860f9c4689ee/SknAvIIUGxlvoU0iJ7XG',
            }),
          ),
          p(
            'This Mintbase NFT represents a raffle ticket offering the chance to win 1 of 10 Status Keycards.',
          ),
        ]),
        li(h3('Winners:')),
      ],
      i === prices[0] && [
        li([
          h3(
            Link({
              text: 'Shift Crypto Wallet Raffle NFT',
              to:
                'https://mintbase.io/pez-dispenser/0x0b23ad11e92fdf87eb5c9b0f24b9860f9c4689ee/OjZ2GaixwXmjOwM6Tgsw',
            }),
          ),

          p(
            'This Mintbase NFT represents a raffle ticket offering the chance to win 1 of 6 Shift Crypto Wallets.',
          ),
        ]),
        li(h3('Winners:')),
      ],

      i === prices[1] && [
        li([h3('Sorry, all others, better luck next time.'), h4('Other participants:')]),
      ],

      li({ class: `Participant p-${id}` }, tok),
    ]),
  )
}
