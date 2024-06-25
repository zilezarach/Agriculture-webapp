

import Typewriter from "typewriter-effect";


function type ()  {
    return (
        <Typewriter 
            options={{
                strings: [
                    'Welcome','to','Agriculture','Resource','Site'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 75,
            }}
        />
    )
}


export default type;