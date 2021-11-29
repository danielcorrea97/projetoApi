import React from 'react'
import "./Inicio.scss"

export default class Inicio extends React.Component {
    render() {
        return (
            <div className="main">
                <h1 className="title">Magic: the Gathering</h1>
                <div className= "content">
                    <img className="image" src="https://s2.glbimg.com/Hvc8m1ib_7YLFj5833oj_Dv76_4=/0x0:875x578/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/c/L/tK0403SrGJrDfBpdu6uw/captura-de-tela-2019-01-03-as-14.17.34.png" alt="capa Magic" />
                    <p className="text">Magic: the Gathering (também conhecido apenas como Magic ou MTG) é um jogo de cartas colecionáveis, criado pelo professor de matemática Richard Garfield e iniciado em 1993 pela Wizards of The Coast.<br/>
                    Magic é o primeiro exemplo do gênero e ainda empolga até hoje, com cerca de seis milhões de jogadores em mais de setenta países. Magic pode ser jogado por dois ou mais jogadores, cada um usando um deck de cartas ou um deck virtual através do Magic: The Gathering Online.<br/>
                    Cada jogo representa uma batalha entre poderosos magos, conhecidos como "planinautas", que usam feitiços, equipamentos, veículos e criaturas fantásticas, retratadas em cartas para derrotar seu oponente.<br/>
                    O jogo Magic: the Gathering é fundamentado em uma história rica: diversos planos de existência e uma vasta gama de personagens compõem o lore de Magic: the Gathering.</p>
                </div>
            </div>
        )
    }

}