export const View = () => [
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
]
