"use client"

import { useEffect, useState } from "react"

const WORDS = ["websites", "dashboards", "mobile apps", "design systems"]

// Starts with the first word fully typed so the server render matches and nothing jumps on load.
export function TypingText() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(WORDS[0])
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const word = WORDS[index]
    let delay: number
    let next: () => void

    if (!deleting && text === word) {
      delay = 1800
      next = () => setDeleting(true)
    } else if (deleting && text === "") {
      delay = 250
      next = () => {
        setDeleting(false)
        setIndex((i) => (i + 1) % WORDS.length)
      }
    } else {
      delay = deleting ? 40 : 85
      next = () => setText(deleting ? text.slice(0, -1) : word.slice(0, text.length + 1))
    }

    const timeout = setTimeout(next, delay)
    return () => clearTimeout(timeout)
  }, [text, deleting, index])

  return (
    <>
      <span className="sr-only">{`I build ${WORDS.slice(0, -1).join(", ")} and ${WORDS.at(-1)}`}</span>
      <span aria-hidden="true">
        I build <span className="text-primary font-medium">{text}</span>
        <span className="inline-block w-[2px] h-[1.1em] -mb-[0.2em] ml-0.5 bg-primary animate-caret-blink" />
      </span>
    </>
  )
}
