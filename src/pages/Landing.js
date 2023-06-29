import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className="container page">
            {/* info */}
            <div className="info">
                <h1>job <span>tracking</span> app</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero neque ex earum saepe aut quasi! Itaque sequi nesciunt, pariatur modi eius sit iusto nam doloribus suscipit saepe minima illum fuga.</p>
                <Link to='/register' className="btn btn-hero">Login/Register
                </Link>
            </div>
            <img src={main} alt="job hunt" className="img main-img" />
        </div>
    </Wrapper>
    )
}

export default Landing