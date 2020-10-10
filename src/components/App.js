import React, {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'
import MainBird from './MainBird'
import {Route} from 'react-router-dom'
import {saveAs} from 'file-saver'
import {Button} from 'react-bootstrap'

const App = React.memo(function App() {
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])

  useEffect(async () => {
    const dt1 = await axios.get('https://songbirden-appen-pdf.herokuapp.com/forest-birds')
    setData1(dt1.data)
  }, [])
  useEffect(async () => {
    const dt1 = await axios.get('https://songbirden-appen-pdf.herokuapp.com/tits-birds')
    setData2(dt1.data)
  }, [])
  useEffect(async () => {
    const dt1 = await axios.get('https://songbirden-appen-pdf.herokuapp.com/ocean-birds')
    setData3(dt1.data)
  }, [])
  const postRules = async () => {
    await axios.post('https://songbirden-appen-pdf.herokuapp.com/pdf')
  }
  useEffect(() => {
    postRules()
  }, []) 
  const onGetRules = async () => {
    let data = await axios.get('https://songbirden-appen-pdf.herokuapp.com/pdf', {responseType: 'blob'})
    let blob = new Blob([data.data], {type: 'application/pdf'})
    saveAs(blob, 'rules.pdf')
  }
  return (
    <div className="App">
      {data1 !== undefined && data2 !== undefined && data3 !== undefined ? 
      <>
      <Route path='/' component={() => <MainBird data={data1} />} exact/>
      <Route path='/tits' component={() => <MainBird data={data2} />} exact/>
      <Route path='/ocean' component={() => <MainBird data={data3} />} exact/><br />
      <Button onClick={onGetRules}>GET RULES</Button>
      </>
      : null}
    </div>
  );
})

export default App;
