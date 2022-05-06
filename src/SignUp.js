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




    const newUserData = {
        FirstName,
        LastName,
        Email,
        PersonalTrainer,
        Owner,
        UserName,
        PassWord

    }
    const HandleOnSubmit = (event) => {
        event.preventDefault()

        const allUser = []
        const allPersonalTrainers = []
        if (newUserData.PersonalTrainer === true) {
            allPersonalTrainers.push(newUserData)
        }


        fetch(url, {
            method: 'Post',
            body: JSON.stringify(newUserData),
            headers: {
                "Content-Type": "application/json",
            }
        }).then(() => {
            console.log('new user added', newUserData)
            allUser.push(newUserData)
            console.log(allPersonalTrainers)



        })




    }



    return (

        <div className="Format">
            <NavBar />


            <div className="About-SignUp">
                <p>
                    Welcom personal trainer, or client. Please fill out all fields
                </p>
            </div>

            <div className="Signup-Info">

                <div className="FirstNameField">
                    <label>First Name</label>
                    <input value={FirstName} onChange={event => setFirstName(event.target.value)} />

                </div>

                <div className="LastNameField">
                    <label> Last Name</label>
                    <input value={LastName} onChange={event => setLastName(event.target.value)} />
                </div>

                <div className="EmailField">
                    <label> Email</label>
                    <input value={Email} onChange={event => setEmail(event.target.value)} />
                </div>

                <div className="PersonalTrainerField">
                    <label>Are you a personal trainer</label>
                    <input type="radio" value="yes" name="personaltrainer" value={PersonalTrainer} onChange={event => isPersonalTrainer('yes')} />yes
                    <input type="radio" value="no" name="personaltrainer" value={PersonalTrainer} onChange={event => isPersonalTrainer('no')} />no

                </div>

                <div className="OwnerField">
                    <label> Are you a owner</label>
                    <input type="radio" value="yes" name="owner" value={Owner} onChange={event => IsOwner('yes')} />yes
                    <input type="radio" value="no" name="owner" value={Owner} onChange={event => IsOwner('no')} />no
                </div>

                <div className="UsernameField">
                    <label> User name</label>
                    <input value={UserName} onChange={event => setUserName(event.target.value)} />
                </div>

                <div className="PassWordField">
                    <label> PassWord</label>
                    <input type='password' value={PassWord} onChange={event => setPassWord(event.target.value)} />
                </div>

                <div className="Submit">
                    <button onClick={HandleOnSubmit} > submit
                    </button>

                </div>




            </div>

        </div >

    )
}

export default SignUp