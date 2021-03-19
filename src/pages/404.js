import React from "react"

import Title from "../atomic/atoms/Title/Title"
import Text from "../atomic/atoms/Text/Text"
import Anchor from "../atomic/atoms/Anchor/Anchor"
import "../App.css"

const Error = () => {
  return (
    <div className="error-page">
      <Title className="error-page_title" size="1">
        404 not found
      </Title>
      <Text textClassName="error-page_text">
        Sorry, We Couldn't Find The Page You Are Looking For.
      </Text>
      <Text textClassName="error-page_text">
        It may have been removed, changed or is temporarily unavailable. Please
        return to our home page to continue browsing our site.
      </Text>
      <Anchor className="error-page_button" Url="/">
        Back to Home
      </Anchor>
    </div>
  )
}

export default Error
