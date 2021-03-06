import React from 'react'
import './App.css'

import Routes from './routes'

import logo from './assets/logo.svg'

import FooterMenu from './components/FooterMenu'

function App() {

  return (
    <div className="container">

      <img src={logo} alt="Calengrade"/>
      
      <div className="content">
        <Routes/>
      </div>
      
      <FooterMenu
        menuItems={[
          {
            title: 'Bugs e Sugestões',
            link: 'https://github.com/marcelojrfarias/calengrade/issues/new'
          },
          {
            title: 'Código Fonte',
            link: 'https://github.com/marcelojrfarias/calengrade'
          },
          {
            title: 'Contato',
            link: 'https://facebook.com/marcelojrfarias'
          }
        ]}
      />
      
      <div className="footerMessage">
        <span>Feito com <span role="img" aria-label="Heart">❤️</span> por <a rel="noopener noreferrer" target="_blank" href="https://github.com/marcelojrfarias">Marcelo Farias</a> com uma <span role="img" aria-label="Help">✋</span> dos amigos</span>
      </div>

    </div>
  )
}

export default App
