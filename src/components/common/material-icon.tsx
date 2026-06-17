type MaterialIconProps = {
  name: string
  className?: string
  size?: number
  filled?: boolean
}

export function MaterialIcon({ name, className = '', size, filled = false }: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`.trim()}
      style={{
        ...(size ? { fontSize: size } : {}),
        ...(filled ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" } : {}),
      }}
      aria-hidden
    >
      {name}
    </span>
  )
}
