import React from 'react'
export default function BtnComponent({start , stop , reset , resume , flag}) {
    return (
        <>
            {(flag === 0)?<button onClick={start}>Start</button>:""}
                {(flag===1)?
                    <div className="flags">
                    <button onClick={stop}>Stop</button>
                    <button onClick={reset}>Reset</button>
                </div>:""}
                {(flag===2)?
                    <div className="flags">
                    <button onClick={resume}>Resume</button>
                    <button onClick={reset}>Reset</button>
                </div>:""}
        </>
    )
}
