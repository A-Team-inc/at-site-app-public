import React from "react"

import Title from "../../atoms/Title/Title"
import Text from "../../atoms/Text/Text"
import Anchor from "../../atoms/Anchor/Anchor"
import ImageAtom from "../../atoms/ImgeAtom/ImageAtom"
import imgIt from "../../../assets/it-technology.webp"
import "./Information.css"

const Information = () => {
  return (
    <section className="information">
      <Anchor className="anchor" Name="next-section"></Anchor>
      <Title className="information-title" size="2">
        Our Services
      </Title>
      <div className="information-content">
        <ImageAtom imgClassName="information-img" Url={imgIt} />
        <Text textClassName="information-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est
        </Text>
      </div>
    </section>
  )
}

export default Information