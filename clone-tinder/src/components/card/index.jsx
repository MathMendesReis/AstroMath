import { React, useEffect, useState } from 'react'
import FooterCard from '../footerCard'
import Pessoas from '../pessoas'
import Topo from '../topo'
import { Container } from './styled'
import axios from "axios"



const Card = () => {
    const [profile, setProfile] = useState("")


    const getPersonal = async () => {
        try {
            const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:darvas/person"
            )
            setProfile(response.data.profile)

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getPersonal()
    }, [])




    return (
        <Container>
            <Topo />
            <Pessoas profile={profile} />
            <FooterCard />
        </Container>
    )
}

export default Card
