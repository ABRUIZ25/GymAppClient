import React, { useState } from "react"
import NavBar from "./NavBar"



function SignUp() {
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [PersonalTrainer, isPersonalTrainer] = useState('')
    const [Owner, IsOwner] = useState('')
    const [UserName, setUserName] = useState('')
    const [PassWord, setPassWord] = useState('')
    const url = 'http://localhost:8080/users/signup?'

    return (
        
    )
}