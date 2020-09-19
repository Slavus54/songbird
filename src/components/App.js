import React, {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'
import MainBird from './MainBird'
import {Route} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const App = React.memo(function App() {
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])

  useEffect(async () => {
    const dt1 = await axios.get('/forest-birds')
    setData1(dt1.data)
  }, [])
  useEffect(async () => {
    const dt1 = await axios.get('/tits-birds')
    setData2(dt1.data)
  }, [])
  useEffect(async () => {
    const dt1 = await axios.get('/ocean-birds')
    setData3(dt1.data)
  }, [])
  const onGet = async () => {
    let dett = await axios.get('/czech')
    console.log(dett.data)
  }
  return (
    <div className="App">
      {data1 !== undefined && data2 !== undefined && data3 !== undefined ? 
      <>
      <Route path='/' component={() => <MainBird data={data1} />} exact/>
      <Route path='/tits' component={() => <MainBird data={data2} />} exact/>
      <Route path='/ocean' component={() => <MainBird data={data3} />} exact/>
      </>
      : null}
      <Button onClick={onGet}>GET API</Button>
    </div>
  );
})

export default App;
