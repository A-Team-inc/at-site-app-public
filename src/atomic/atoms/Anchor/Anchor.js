import React from "react"

const Anchor = ({ className = " ", Url, Name, children, target }) => (
  <a className={className} name={Name} href={Url} target={target}>
    {children}
  </a>
);

export default Anchor
