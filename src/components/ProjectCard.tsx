import type { Project } from '../data/projects.ts'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return <li className={styles.card} id={project.id} />
}
