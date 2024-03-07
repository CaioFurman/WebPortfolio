import './Header.css'
import HomeIcon from '@mui/icons-material/Home';

function PortHeader(){
    return (
        <div className='webHeaderBackground'>
            <div className='webHeaderBox'> 
                <a href="/" className='webHeaderHome'> <HomeIcon style={{ color: "#F8F8F8", fontSize: 60}} /> </a>
                <a href="/" className='webHeaderName'>Caio Xavier Furman</a>
                <a href="/" className='webHeaderButton'>About</a>
                <a href="/" className='webHeaderButton'> Experience </a>
                <a href="/" className='webHeaderButton'> Portfolio </a>
                <a href="/" className='webHeaderButton'> Contact </a>
            </div>
        </div>
    );
}

export default PortHeader;