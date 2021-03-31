import React from "react"

import Title from "../../atoms/Title/Title"
import Text from "../../atoms/Text/Text"
import Anchor from "../../atoms/Anchor/Anchor"
import "./Contacts.css"

import ContactForm from "./ContactForm";

const Contacts = () => {
  return (
    <section className="contacts">
      <Title className="contacts_title" size="2">
        Contacts
      </Title>
      <ContactForm />
      <div className="contacts_content">
        <div className="phone-wrapper">
          <Text textClassName="contacts_info-title">Phone:</Text>
          <Anchor Url="tel:+380636527771" className="contacts_info">
            +38(063)652-77-71
          </Anchor>
          <Anchor Url="tel:+380963248636" className="contacts_info">
            +38(096)324-86-36
          </Anchor>
        </div>
        <div className="email-wrapper">
          <Text textClassName="contacts_info-title">E-mail:</Text>
          <Anchor Url="mailto:test@tect.com" className="contacts_info">
            consulting@ateam-inc.com
          </Anchor>
        </div>
      </div>
      <Text textClassName="copyright">Copyright © 2021 A-Team inc.</Text>
    </section>
  )
}

export default Contacts
