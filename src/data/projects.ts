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
    title: 'Budget app',
    image: '/projects/budget-kort.jpg',
    text: 'Lägg till inkomster och utgifter och se den aktuella balansen.',
    tags: ['HTML', 'TypeScript', 'CSS'],
  },
  {
    id: 'projekt-2',
    title: 'Café Måsen',
    image: '/projects/cafe-masen.jpg',
    text: 'En webbshop för ett café.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'projekt-3',
    title: 'God Morning Club',
    image: '/projects/god-morning.jpg',
    text: 'En meny för ett frukostcafé.',
    tags: ['HTML', 'CSS'],
  },
  { id: 'projekt-4', title: '', tags: ['JavaScript'] },
  { id: 'projekt-5', title: '', tags: ['CSS', 'JavaScript'] },
  { id: 'projekt-6', title: '', tags: ['HTML', 'JavaScript'] },
]
