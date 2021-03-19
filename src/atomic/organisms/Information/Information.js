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
        <div className="information-text-wrapper">
          <Text textClassName="information-text">
            We are A-Team, software development company with great experience!
          </Text>
          <Text textClassName="information-text">
            We are proposing our expertise to help your business grow.
          </Text>
          <Text textClassName="information-text">
            We try to be sensitive to the requirements of the customer.
          </Text>
          <Text textClassName="information-text">
            Our main goal is to build long-term relationships with the client for the development and improving of his business by providing quality.
          </Text>
          <Text textClassName="information-text">
            Our expertise is full-cycle software development, we have the flexible SCRUM teams:
            PM, PO, FE and BE devs, QA.
          </Text>
          <Text textClassName="information-text">
            We are professionals in our field. Improve your business with us!
          </Text>
        </div>
      </div>
    </section>
  )
}

export default Information
