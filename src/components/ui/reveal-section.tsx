"use client"

import { type ReactNode, useEffect, useRef, useState } from "react"

export function RevealSection({
  id,
  children,
  className,
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`transform-gpu transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className ?? ""}`}
    >
      {children}
    </section>
  )
}
