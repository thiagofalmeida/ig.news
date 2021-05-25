import { useEffect, useState } from "react"

export function Async() {
  // const [isButtonVisible, setIsButtonVisible] = useState(false)
  const [isSpanInvisible, setIsSpanInvisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      // setIsButtonVisible(true)
      setIsSpanInvisible(true)
    }, 1000)
  }, [])

  return (
    <div>
      <h1>Hello World</h1>
      {/* { isButtonVisible && <button>Button</button>} */}
      { !isSpanInvisible && <span>Span</span>}
    </div>
  )
}