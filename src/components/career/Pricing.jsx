import React from "react"
import Back from "../common/back/Back"
import "./price.css"
import Faq from "./Faq"
import CareerInfo from "./CareerInfo"
import Careerykbut from "./Careerinykbut"

const Career = () => {
  return (
    <>
      <Back title='CAREER' />
      {/* <Careerykbut /> */}
      <CareerInfo />
      <Faq />
    </>
  )
}

export default Career
