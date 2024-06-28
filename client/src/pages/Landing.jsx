import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
        <h1>job <span>tracking</span> app</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur possimus culpa reiciendis tempora, placeat optio soluta quibusdam at labore voluptatem eius, debitis magnam exercitationem sapiente provident officiis nemo repudiandae voluptates! Quas soluta laboriosam doloremque similique totam, velit non fugiat ipsam laudantium ducimus quod nam ab adipisci, dicta libero ad.
        </p>
        <Link to="/register" className='btn register-link'>Register</Link>
        <Link to="/login" className='btn login-link'>Login / Demo User</Link>
      </div>
        <img src={main} alt="job hunt" className='img main-img' />
        </div>
    </Wrapper>
  )
}




export default Landing