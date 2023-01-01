import React from "react"
import ReactDOM from "react-dom"
import {SpeechProvider} from '@speechly/react-client'

import { Provider } from "./context/context"
import App from './App'
import './index.css'

ReactDOM.render(
  <SpeechProvider appId="b2799a41-ee83-46a6-be50-9d155a2ffdfe" language='en-US'>
  <Provider>
    <App />
  </Provider>
  </SpeechProvider>,
document.getElementById('root')
)

  