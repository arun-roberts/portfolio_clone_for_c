import React, { useEffect } from 'react'

const Motion = ({ ghostMotion, clearMotion }) => {
    useEffect(clearMotion, []);

    return (
            <div className='motion'>
                <video className="motion-video" controls>
                    <source src="https://www.dropbox.com/s/libbfc34hlgwmsf/Celia%20-%20Showreel_1st%20Draft%20%28Updated%29%20copy.mp4?raw=1" />
                </video>
                <div className="ghost-div--motion" style={{ background: `${ ghostMotion === true ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)'}` }}></div>
            </div>
    )
}

export default Motion