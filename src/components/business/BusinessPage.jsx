import React from "react"
import Back from "../common/back/Back"
import BusinessCard from "./BusinessCard"

const BusinessPage = () => {
  return (
    <>
      <Back title='BUSINESS UNIT' />
      <section className='team padding'>
        <div className='container grid' style={{gridTemplateColumns: "auto auto", alignContent: "center", justifyContent:'center'}}>
          <BusinessCard />
        </div>
      </section>
    </>
  )
}

export default BusinessPage
