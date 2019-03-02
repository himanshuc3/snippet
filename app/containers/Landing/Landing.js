import React, {Component} from 'react';
import styled from '@emotion/styled'
import {A,theme} from '../../styles/index'
import github from '../../assets/github.svg'

const Container = styled.div`
    // background: black;
    width: 100vw;
    height: 100vh;
    position: relative;
`

const Header = styled.header`
    // background: red;
    display: flex;
    justify-content: space-around;
    padding: 20px 0;

    &:after{
        content: '';
        width: 80%;
        height:400px;
        background: ${theme.colors.secondary};
        border-bottom-right-radius: 20px;
        transform: rotate(-10deg);
        opacity: 0.5;
        position:absolute;
        z-index: 100;
        top: -40%;
        left: -10%;

    }
`

const GithubImage = styled.img`


`

const Hero = styled.div`
    width: 60%;
    background: yellow;
    margin: 0 auto;

    & h1{
        text-align: center;
    }
`

const UnorderedList = styled.ul`
    display: flex;
    font-size: 30px;
    list-style-type: none;
    justify-content: space-between;
    width: 50%;
    // background: green;
`

class Landing extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){

        let menuItems = [
            {
                name:'feature1',
                href:'/#'
            },
            {
                name:'feature2',
                href:'/#'
            },
            {
                name:'feature3',
                href:'/#'
            },
            {
                name:'feature4',
                href:'/#'
            },
        ]
        return(
            <Container>
                <Header>
                    <UnorderedList>
                    {menuItems.map((item,index)=>{
                        return <li key={index}><A href={item.href}>{item.name}</A></li>
                    })}
                    </UnorderedList>
                    <span>
                        <img src={github} />
                    </span>
                </Header>
                <Hero>
                    <h1>snippet</h1>
                </Hero>
            </Container>
        )
    }
}

export default Landing