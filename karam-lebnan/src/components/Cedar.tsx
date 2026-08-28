interface CedarProps {
  className?: string
  title?: string
}

/**
 * Cèdre du Liban stylisé (silhouette à étages horizontaux), repris du logo.
 * Décoratif par défaut (aria-hidden) ; passez `title` pour lui donner un rôle
 * d'image accessible.
 */
export function Cedar({ className, title }: CedarProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <polygon points="36,18 50,6 64,18 50,27" />
      <polygon points="28,34 50,23 72,34 50,45" />
      <polygon points="20,52 50,39 80,52 50,65" />
      <polygon points="12,72 50,57 88,72 50,87" />
      <rect x="45.5" y="80" width="9" height="14" rx="1" />
      <polygon points="39,94 61,94 66,99 34,99" />
    </svg>
  )
}
