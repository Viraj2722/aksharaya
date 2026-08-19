import { HeroCarousel } from './HeroCarousel'

// Static hero carousel — fixed images from /public with one-line captions, no titles.
const slides = [
  {
    id: '1',
    image: '/07.jpg',
    title: '',
    description:
      'Calligraphy manuals are available to learn balbodh (basic) calligraphy in 10 Indian scripts.',
    altText: 'Calligraphy manuals for balbodh calligraphy in 10 Indian scripts',
  },
  {
    id: '2',
    image: '/03.jpg',
    title: '',
    description:
      'Aksharsanwad - a lecture series conducted from various experts in the field of letterforms.',
    altText: 'Aksharsanwad lecture series',
  },
  {
    id: '3',
    image: '/10.jpg',
    title: '',
    description:
      'An installation of rare 4 letter conjuncts on displayed at Typoday 2012, Pune.',
    altText: 'Installation of rare 4 letter conjuncts at Typoday 2012, Pune',
  },
  {
    id: '4',
    image: '/09.jpg',
    title: '',
    description:
      'An installation of newspapers mastheads collected from several nooks and corners of India and displayed at Typography Day 2012, IIT, Mumbai.',
    altText: 'Installation of newspaper mastheads at Typography Day 2012, IIT Mumbai',
  },
  {
    id: '5',
    image: '/14.jpg',
    title: '',
    description:
      "'Happening' has performed by various students in Sir J. J. Institute of Applied Art campus, Mumbai in 2008.",
    altText: "'Happening' performance at Sir J. J. Institute of Applied Art, Mumbai, 2008",
  },
  {
    id: '6',
    image: '/05.jpg',
    title: '',
    description: 'Calligraphy camp conducted in 2016 in Bhor, Pune, India.',
    altText: 'Calligraphy camp in Bhor, Pune, 2016',
  },
]

export function HeroSection() {
  return <HeroCarousel slides={slides} />
}
