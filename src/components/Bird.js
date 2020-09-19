import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import play from '../img/play.png'
import axios from 'axios'

const Bird = React.memo(({data, donen, setDonen, setCont, cont, setCo, co}) => {
    const [audio, setAudio] = useState(null)
    const [styl1, setStyl1] = useState({backgroundColor: '#007bff'})
    const [styl2, setStyl2] = useState({backgroundColor: '#007bff'})
    const [styl3, setStyl3] = useState({backgroundColor: '#007bff'})  

    const onVolume = () => {
        let p = document.getElementById('volume')
        let ran = document.getElementById('audio-range')
        p.innerHTML = 'volume: '+ran.value
        if (audio !== null) {
            audio.volume = ran.value / 10
        }
    }

    const onPlay = () => {
        let aud = new Audio(data.audio)
        if (audio == null) {
        setAudio(aud)
        aud.play()
        aud.volume = 1
        }
    }

    const onStop = () => {
        if (audio !== null) {
            audio.pause()
            setAudio(null)
        }
    }
 
    return (
        <div className="bird"> 
            {data !== undefined ? 
            <>
            <input style={{width: '100px'}} id="audio-range" onInput={onVolume} type="range" min="0" max="10" step="1" value="0" /> 
            <p style={{color: 'white'}} id="volume">volume: 0</p>
            <Button onClick={onPlay}><img className="play-button" src={play} alt="Sorry"/></Button>
            <Button onClick={onStop}>Stop</Button>
            <h4 style={{color: 'white'}}>Choose right variant</h4>
            <Button style={styl1} onClick={() => {if (data.first !== data.right) {setStyl1({backgroundColor: 'red'})} else if (data.first === data.right) {setDonen(true); setCo(co + 1)}}}>{data.first}</Button>
            <Button style={styl2} onClick={() => {if (data.second !== data.right) {setStyl2({backgroundColor: 'red'})} else if (data.second === data.right) {setDonen(true); setCo(co + 1)}}}>{data.second}</Button>
            <Button style={styl3} onClick={() => {if (data.third !== data.right) {setStyl3({backgroundColor: 'red'})} else if (data.third === data.right) {setDonen(true); setCo(co + 1)}}}>{data.third}</Button>
            </> : <h3 style={{color: 'white'}}>Loading...</h3>}  
            {donen === true && data !== undefined ? 
            <div className="done">
            <img className="done-img" src={data.img} alt="Sorry"/><br />
            <b>{data.right}</b><br />
            <string>{data.latin}</string>
            </div> 
            : null}
            {donen === true ?
            <Button onClick={() => {
                setCont(cont + 1)
                setDonen(false)
                setStyl1({backgroundColor: '#007bff'})
                setStyl2({backgroundColor: '#007bff'})
                setStyl3({backgroundColor: '#007bff'}) 
            }}>Next</Button>
            : null}
        </div>
    )
})

export default Bird