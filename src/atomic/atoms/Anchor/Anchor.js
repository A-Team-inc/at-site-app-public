import React from "react"

const Anchor = ({ className = " ", Url, Name, children }) => {
  return (
    <a className={className} name={Name} href={Url}>
      {children}
    </a>
  )
}

export default Anchor
