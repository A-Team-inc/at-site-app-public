import React, { useEffect, useState } from "react"
import Loader from "../Loader/Loader"
import Information from "../atomic/organisms/Information/Information"
import Technology from "../atomic/organisms/Technology/Technology"
import Contacts from "../atomic/organisms/Contacts/Contacts"
import SEO from "../atomic/organisms/SEO/SEO"
import reportWebVitals from "../reportWebVitals"
import { resizeWidthOnly } from "../utilities/index"

import Title from "../atomic/atoms/Title/Title"
import Text from "../atomic/atoms/Text/Text"
import Anchor from "../atomic/atoms/Anchor/Anchor"
import ImageAtom from "../atomic/atoms/ImgeAtom/ImageAtom"
import HeroImage from "../assets/Hero.jpg"
import BottomArrow from "../assets/icons/arrow.png"
import "../App.css"

const ScrollMagic =
  typeof window !== `undefined` ? require("scrollmagic") : null

const initialState =
  typeof window !== "undefined"
    ? {
        controller: new ScrollMagic.Controller({
          globalSceneOptions: { triggerHook: "onLeave", duration: "200%" },
        }),
      }
    : null

export default function Home() {
  const [loaderState, setLoaderState] = useState(true)
  const [scrollMagic, setScrollMagic] = useState(initialState)

  resizeWidthOnly(function () {
    if (typeof window !== `undefined`) {
      window.location.reload()
    }
  })

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { controller } = scrollMagic

      window.onload = () => {
        window.scrollTo(0, 0)
      }
      window.onload()

      setTimeout(() => {
        let bodyElement = document.querySelector("body")
        bodyElement.style.overflow = "auto"
        setLoaderState(false)
      }, 5000)

      let viewportWidth = window.innerWidth

      if (viewportWidth >= 1025) {
        const sections = document.querySelectorAll("section")

        for (let i = 0; i < sections.length; i++) {
          new ScrollMagic.Scene({
            triggerElement: sections[i],
          })
            .setPin(sections[i], { pushFollowers: false })
            .addTo(controller)
        }
      }
    }
  }, [])

  return (
    <div className="A-Team">
      <SEO />
      {loaderState && <Loader />}
      <div className="content">
        <section className="welcome-section">
          <div className="hero-section">
            <div className="name">A-Team</div>
            <img src={HeroImage} className="hero-logo" alt="logo" />
          </div>
          <div className="middle-section">
            <Text textClassName="line-1 anim-typewriter">
              We turn your business ideas into reality
            </Text>
            <Title size="1">
              Are you looking for super talented software development
              specialists?
            </Title>
            <Title className="home-subtitle" size="2">
              Our experts will help your business to grow
            </Title>
            <Title className="home-subtitle" size="2">
              Let's do it together!
            </Title>
            <Anchor className="animation-arrow" Url="#next-section">
              <ImageAtom imgClassName="bottom_arrow" Url={BottomArrow} />
            </Anchor>
          </div>
        </section>

        <Information />

        <Technology />

        <Contacts />
      </div>
    </div>
  )
}

reportWebVitals()
