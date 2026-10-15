export const ALL_TAG = 'Alla'

export const filterTags = [ALL_TAG, 'HTML', 'CSS', 'JavaScript', 'TypeScript']

export type Project = {
  id: string
  title: string
  image: string
  text: string
  tags: string[]
  repoUrl: string
}

export const projects: Project[] = [
  {
    id: 'projekt-1',
    title: 'God Morning Club',
    image: '/projects/god-morning-lika.jpg',
    text: 'Mitt första projekt, en meny för ett frukostcafé.',
    tags: ['HTML', 'CSS'],
    repoUrl:
      'https://github.com/Medieinstitutet/fed25d-html-css-inl-2-design-jennygustafsson',
  },
  {
    id: 'projekt-2',
    title: 'Café Måsen',
    image: '/projects/cafe-masen-lika.jpg',
    text: 'Mitt andra projekt, en webbshop för ett café.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repoUrl:
      'https://github.com/jennygustafsson/fed25d-js-intro-inl-1-jennygustafsson',
  },
  {
    id: 'projekt-3',
    title: 'Budget app',
    image: '/projects/budget-lika.jpg',
    text: 'Mitt tredje projekt, en app för inkomster och utgifter.',
    tags: ['HTML', 'TypeScript', 'CSS'],
    repoUrl:
      'https://github.com/Medieinstitutet/fed25d-js-inl-2-budget-app-jennygustafsson',
  },
  {
    id: 'projekt-4',
    title: 'Mars Bound Marauders',
    image: '/projects/mars-lika.jpg',
    text: 'Ett grupparbete där vi skapade ett spel.',
    tags: ['HTML', 'TypeScript', 'CSS'],
    repoUrl:
      'https://github.com/Medieinstitutet/fed25d-js-intro-grupparbete-the-mars-bound-marauders',
  },
  {
    id: 'projekt-5',
    title: 'Juniper',
    image: '/projects/juniper-lika.jpg',
    text: 'Mitt femte projekt, ett grupparbete om drycken Juniper.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repoUrl:
      'https://github.com/Medieinstitutet/fed25d-grafiska-verktyg-vector-graphics',
  },
  {
    id: 'projekt-6',
    title: 'Böcker',
    image: '/projects/bocker-lika.jpg',
    text: 'Mitt sjätte projekt, ett grupparbete om böcker och recensioner.',
    tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    repoUrl: 'https://github.com/jennygustafsson/starter-app-template',
  },
]
