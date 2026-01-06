import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../styles/Presentation.css'

function Presentation() {

  return (
    <div className='presentation'>
      <div>
        My name is Roberto Bonnelly, I am a bioinformatician working on tech
        to build my career. You can learn more about myself in the different pages of this web-site!
      </div>
      <p>Technologies used:</p>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default Presentation
