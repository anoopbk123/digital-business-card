import React from 'react'
import CardContainer from '../CardContainer'
import ProfilePicture from '../profile-picture/ProfilePicture'
import MainArea from '../main-area/MainArea'
import Footer from '../footer/Footer'

export default function BusinessCard() {
  return (
    <>
      <CardContainer>
        <ProfilePicture/>
        <MainArea/>
        <Footer/>
      </CardContainer>
    </>
  )
}
