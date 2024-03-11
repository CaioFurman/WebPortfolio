import './Banner.css'
import './BannerStars.css'

function CmpBanner(){
    return (
        <div className='webBannerBackground'>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <h1 className='webBannerTitle'>Caio Xavier Furman</h1>
            <h2 className='webBannerSubTitle'>Fullstack Software Developer</h2>
        </div>
    );
}

export default CmpBanner;