export const state = {
  title: 'NonCon 2020 Raffle',
  description: ['Not a Conference.', ' Not a Conjob.', ' Just a Raffle.'],
  image: '/img/noncon2020-banner.jpg',

  menu: [],

  seo: {
    custom: [
      {
        'data-ad-client': 'ca-pub-7938900206625974',
      },
    ],
  },

  hero: {
    menu: [
      { to: '/', text: 'About' },
      { to: '/raffle/', text: 'Raffle' },
      { to: '/terms/', text: 'Terms' },
      { to: '/docs/', text: 'Docs' },
      { to: '/donate/', text: 'Donate' },
    ],
  },

  theme: 'light',
  pageClass: {
    light: true,
  },

  footer: {
    one: {
      title: 'NonCon',
      menu: [
        { to: '/privacy/', text: 'privacy notice' },
        { to: 'https://www.parallele.at/code-of-conduct/', text: 'code of conduct' },
      ],
    },
    two: {
      title: 'Social',
      menu: [
        { to: 'https://keybase.io/noncon', text: 'keybase' },
        { to: 'https://github.com/nonconorg', text: 'github' },
        { to: 'https://t.me/joinchat/E9fhuBVwENCRcC3-df9wxA', text: 'telegram' },
        { to: 'https://twitter.com/ParallelePolis', text: 'twitter' },
      ],
    },
    three: {
      title: 'Network',
      menu: [
        { to: 'https://parallele.at', text: 'parallele.at' },
        { to: 'https://bwb.is', text: 'bwb.is' },
        // { to: 'https://riat.at', text: 'riat.at' },
      ],
    },
  },
}
