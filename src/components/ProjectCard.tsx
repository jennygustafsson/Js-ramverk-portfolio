import type { Project } from '../data/projects.ts'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className={styles.card}>
      <img src={project.image} alt={project.title} />
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <a className={`${styles.repo} textLink`} href={project.repoUrl}>
          GitHub
        </a>
      </div>
    </li>
  )
}
