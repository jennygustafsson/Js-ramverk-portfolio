import { useState } from 'react'
import { ALL_TAG, filterTags, projects } from '../data/projects.ts'
import { ProjectCard } from './ProjectCard.tsx'
import styles from './Projects.module.css'

export function Projects() {
  const [activeTag, setActiveTag] = useState(ALL_TAG)

  const visibleProjects =
    activeTag === ALL_TAG
      ? projects
      : projects.filter((project) => project.tags.includes(activeTag))

  return (
    <section id="projekt" className={styles.projects}>
      <h2>Projekt</h2>
      <div className={styles.filters}>
        {filterTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={tag === activeTag ? styles.active : styles.button}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <ul className={styles.grid}>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  )
}
