import theme from './theme'
import {css} from '@emotion/core'

const reset = css`
    html{
        box-sizing: border-box;
        width:100%;
    }

    *{
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
    }

    *,
    *:before,
    *:after{
        box-sizing: inherit;
    }
    body{
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing:grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: white;
        color: black;
        line-height: 1.25;
        font-family: Helvetica;
        font-size: 16px;
    }

`

export default reset