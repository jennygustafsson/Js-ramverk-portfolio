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
    image: '/projects/budget.png',
    text: 'Lägg till inkomster och utgifter och se den aktuella balansen.',
    tags: ['HTML', 'TypeScript', 'CSS'],
  },
  { id: 'projekt-2', title: '', tags: ['HTML'] },
  { id: 'projekt-3', title: '', tags: ['CSS'] },
  { id: 'projekt-4', title: '', tags: ['JavaScript'] },
  { id: 'projekt-5', title: '', tags: ['CSS', 'JavaScript'] },
  { id: 'projekt-6', title: '', tags: ['HTML', 'JavaScript'] },
]
