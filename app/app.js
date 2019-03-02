import React from 'react'
import Landing from './containers/Landing/Landing'
import {Global } from '@emotion/core'
import {reset} from './styles/index'


const App = () => {
    return(
        <div>
            <Global styles={reset} />
            <Landing />
        </div>
        
    )
}

export default App

