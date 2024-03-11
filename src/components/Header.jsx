import './Header.css'
import Logo from '../images/whitelogo.png'

function CmpHeader(){
    return (
        <div>
            <div className='webHeaderShadow'></div>
            <div className='webHeaderBackground'>
                <div className='webHeaderBox'> 
                    <a href="/" className='webHeaderHome'> <img className='webLogo' src={Logo}></img></a>
                    <a className='webHeaderName'></a>
                    <a href="/" className='webHeaderButton'>About</a>
                    <a href="/" className='webHeaderButton'> Experience </a>
                    <a href="/" className='webHeaderButton'> Portfolio </a>
                    <a href="/" className='webHeaderButton'> Contact </a>
                </div>
            </div>
        </div>
    );
}

export default CmpHeader;