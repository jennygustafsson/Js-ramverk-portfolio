export const ALL_TAG = 'Alla'

export const filterTags = [ALL_TAG, 'HTML', 'CSS', 'JavaScript', 'TypeScript']

export type Project = {
  id: string
  title: string
  image?: string
  text?: string
  tags: string[]
  repoUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'projekt-1',
    title: 'God Morning Club',
    image: '/projects/god-morning.jpg',
    text: 'En meny för ett frukostcafé.',
    tags: ['HTML', 'CSS'],
    repoUrl:
      'https://github.com/Medieinstitutet/fed25d-html-css-inl-2-design-jennygustafsson',
  },
  {
    id: 'projekt-2',
    title: 'Café Måsen',
    image: '/projects/cafe-masen.jpg',
    text: 'En webbshop för ett café.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repoUrl:
      'https://github.com/jennygustafsson/fed25d-js-intro-inl-1-jennygustafsson',
  },
  {
    id: 'projekt-3',
    title: 'Budget app',
    image: '/projects/budget-kort.jpg',
    text: 'Lägg till inkomster och utgifter och se den aktuella balansen.',
    tags: ['HTML', 'TypeScript', 'CSS'],
    repoUrl:
      'https://github.com/Medieinstitutet/fed25d-js-inl-2-budget-app-jennygustafsson',
  },
  {
    id: 'projekt-4',
    title: 'Mars Bound Marauders',
    image: '/projects/mars-marauders.jpg',
    text: 'Ett escape room-spel på väg till Mars.',
    tags: ['HTML', 'TypeScript', 'CSS'],
    repoUrl:
      'https://github.com/Medieinstitutet/fed25d-js-intro-grupparbete-the-mars-bound-marauders',
  },
  {
    id: 'projekt-5',
    title: 'Juniper',
    image: '/projects/juniper-kort.jpg',
    text: 'En sida för drycken Juniper.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repoUrl:
      'https://github.com/Medieinstitutet/fed25d-grafiska-verktyg-vector-graphics',
  },
  {
    id: 'projekt-6',
    title: 'Böcker',
    image: '/projects/bocker.jpg',
    text: 'En app för böcker och recensioner.',
    tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    repoUrl: 'https://github.com/jennygustafsson/starter-app-template',
  },
]
