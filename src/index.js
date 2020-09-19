import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// api - 78d959bd0249442712c00a6addb8513c
// secret - 1d7c8b2dd04da143
// url to get a photo - https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=78d959bd0249442712c00a6addb8513c&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=tit

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
