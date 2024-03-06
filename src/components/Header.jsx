import './Header.css'
import HomeIcon from '@mui/icons-material/Home';

function PortHeader(){
    return (
        <div className='webHeaderBackground'>
            <div className='webHeaderBox'> 
                <a href="#app" className='webHeaderHome'> <HomeIcon style={{ color: "#F8F8F8", fontSize: 60}} /> </a>
                <a className='webHeaderName'>Caio Xavier Furman</a>
                <a href="#app" className='webHeaderButton'>About</a>
                <a href="#app" className='webHeaderButton'> Experience </a>
                <a href="#app" className='webHeaderButton'> Portfolio </a>
                <a href="#app" className='webHeaderButton'> Contact </a>
            </div>
        </div>
    );
}

export default PortHeader;