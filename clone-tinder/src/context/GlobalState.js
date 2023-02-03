import React, { useEffect, useState } from 'react'
import { GlobalContext } from './GlobalContext'
import axios from "axios"

const GlobalState = ({ children }) => {
  const [profiles, setProfiles] = useState([])
  const [matchs, setMacths] = useState([])
  const [showButton, setShowButton] = useState(false);

  const removeProfile = (profile) => {
    const newArray = [...matchs]
    const match = newArray.filter((pro) => {
      return pro.id !== profile.id
    })
    setMacths(match)
  }

  const mudarButton = () => {
    setShowButton(!showButton);
  };
  const listMatch = (profile) => {
    const newArray = [...matchs]
    const match = newArray.find(p => profile.id === p.id)
    if (match === undefined) {
      newArray.push(profile)
      setMacths(newArray)
    }
  }

  const GetProfileToChoose = async () => {
    try {
      const response = await axios.get(`
      https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person
      `)
      setProfiles(response.data.profile)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetProfileToChoose()
  },[])

  const data = {
    profiles,
    GetProfileToChoose,
    listMatch,
    matchs,
    showButton,
    mudarButton,
    removeProfile
    
  }
  return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
}

export default GlobalState