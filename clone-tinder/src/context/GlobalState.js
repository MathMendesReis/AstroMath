import React, { useEffect, useState } from 'react'
import { GlobalContext } from './GlobalContext'
import axios from "axios"

const GlobalState = ({ children }) => {
  const [profiles, setProfiles] = useState([])

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
    profiles
  }
  return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
}

export default GlobalState