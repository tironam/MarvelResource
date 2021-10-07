import React from 'react'

const styles = {
    bannerText: {
    fontSize: '55px',
    color: '#fff',
    textAlign: 'center',
    Margin: '25px 25px 25px 25px',
    fontFamily: "Bebas Neue, cursive",
    textShadow: "2px 2px black",
    justifyContent: "center",
    alignItems: "center"
    }
}

function HomeBanner () {
    return (
            <div className="banner ">
                {/* <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2021-08-11-at-10-14-01-am-1628691837.png" alt="Uatu The Watcher" style={{width: '100%', height: '100%'}}>
                </img> */}
                {/* <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',  color: 'white'}}> */}
                    <h1 className="header-text" >The ultimate resource for new and seasoned fans of the MCU</h1>
                {/* </div> */}
            </div>
    )
}

export default HomeBanner
