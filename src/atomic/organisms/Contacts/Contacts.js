import React from "react"

import Title from "../../atoms/Title/Title"
import Text from "../../atoms/Text/Text"
import Anchor from "../../atoms/Anchor/Anchor"
import ImageAtom from "../../atoms/ImgeAtom/ImageAtom"
import "./Contacts.css"

import ContactForm from "./ContactForm";
import { LinkedIn, Facebook, Instagram } from "../../../assets/icons/messengers";

const Contacts = () => {
  return (
    <section className="contacts">
      <Title className="contacts_title" size="2">
        Contacts
      </Title>
      <ContactForm />
      <div className="contacts_content">
        <div className="follow-wrapper">
          <Text textClassName="contacts_info-title">Follow us:</Text>
          <div className="contacts_info_items">
            <Anchor Url="https://www.linkedin.com/company/a-team-software-company" className="contacts-icon" target="_blank">
              <ImageAtom Url={LinkedIn} />
            </Anchor>
            <Anchor Url="https://www.facebook.com/ATeamSoftwareEngineeringCompany" className="contacts-icon" target="_blank">
              <ImageAtom Url={Facebook} />
            </Anchor>
            <Anchor Url="https://www.instagram.com/ateam_softwarecompany" className="contacts-icon" target="_blank">
              <ImageAtom Url={Instagram} />
            </Anchor>
          </div>
        </div>
        <div className="email-wrapper">
          <Text textClassName="contacts_info-title">E-mail:</Text>
          <Anchor Url="mailto:consulting@ateam-inc.com" className="contacts_info">
            consulting@ateam-inc.com
          </Anchor>
        </div>
      </div>
      <Text textClassName="copyright">Copyright © 2021 A-Team inc.</Text>
    </section>
  )
}

export default Contacts
