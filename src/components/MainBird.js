import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import Bird from './Bird'
import Header from './Header' 
import Formik from './Form'
import Login from './Login'
import {usePersist} from './usePersist'
import logoBird from '../img/bird-logo.png'
import Modal from 'react-awesome-modal'
import GoogleLogin from 'react-google-login'
import axios from 'axios'
import verified from '../img/verified.png'
import './MainBird.css'

const MainBird = ({data}) => {
    const clientId = '145344910360-98ka7ht7gobuh87vf7amno07lrmt1a1b.apps.googleusercontent.com'
    const [isSign, setSign] = useState(false)
    const [isVer, setVer] = useState(false)
    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(0)
    const [co, setCo] = usePersist(0)
    const [done, setDone] = useState(false)
    const [nameFirst, setNameFirst] = useState(null)
    const [nameSecond, setNameSecond] = useState(null)
    const [email, setEmail] = useState(null)
    const [passwordFirst, setPasswordFirst] = useState(null)
    const [passwordSecond, setPasswordSecond] = useState(null)

    if (data !== undefined) {
        console.log(data[count])
    }
    useEffect(() => {
        if (count > 1) {
            setCount(0)
        }
    }, [count])

    const onSignUp = async () => {
        await axios.post('https://backend-songenbirden.herokuapp.com/signup', {data: {name: nameFirst, email, password: passwordFirst}})
        setSign(true)
    }

    const onSignIn = async () => {
        if (isSign === true) {
            await axios.post('https://backend-songenbirden.herokuapp.com/signin', {data: {name: nameSecond, password: passwordSecond}})
            if (nameFirst === nameSecond && passwordFirst === passwordSecond) {
                alert('Great')
            }
            setSign(false)
            setVer(true)
        }
    }

    const onReg = (e) => {
        console.log(e.profileObj)
    }

    return (
        <div className="container">    
        <Button className="register" onClick={() => setOpen(true)}>SignUp</Button>       
        <h3 className="count">Score: {co}</h3>
        <img src={logoBird} className="bird-logo" alt="Sorry"/>
        <Modal visible={open} width="350" height="500" effect="fadeInUp" onClickAway={() => setOpen(false)}>
                    <div>
                        {isVer === true ? <img className="verifed" src={verified} alt="Sorry"/> : 
                        <>
                        {isSign === false ? 
                        <Formik name={nameFirst} 
                                setName={setNameFirst} 
                                email={email} 
                                setEmail={setEmail} 
                                password={passwordFirst} 
                                setPassword={setPasswordFirst} 
                        /> : 
                        <Login  name={nameSecond} 
                                setName={setNameSecond} 
                                password={passwordSecond} 
                                setPassword={setPasswordSecond} 
                        />}
                        </>
                        }
                        <Button onClick={onSignUp}>SignUp</Button>
                        <Button onClick={onSignIn}>SignIn</Button>
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Login"
                            onSuccess={onReg}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
        </Modal>
        <Header />       
            {data !== undefined ? 
            <Bird setCo={setCo} co={co} 
                  cont={count} setCont={setCount}
                  donen={done} setDonen={setDone} 
                  data={data[count]} 
            /> : null}
        </div>
    )
}

export default MainBird