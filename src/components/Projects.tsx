import { projects } from '../data/projects.ts'
import { ProjectCard } from './ProjectCard.tsx'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <section id="projekt" className={styles.projects}>
      <h2>Projekt</h2>
      <ul className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  )
}
