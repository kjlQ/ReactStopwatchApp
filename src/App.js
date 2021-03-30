import React , {useState} from 'react'
import BtnComponent from "./Components/BtnComponent"
import DisplayComponent from "./Components/DisplayComponent"
import "./App.css"
export default function App() {
    const [time , setTime] = useState({h:0,m:0,s:0,ms:0})
    const [interv,setInterv] = useState()
    const [flag,setFlag] = useState(0)
    function start() {
        run()
        setInterv(setInterval(run , 10))
        setFlag(1)
    }
    function stop() {
        clearInterval(interv)
        setFlag(2)
    }
    function reset() {
        clearInterval(interv)
        setTime({h:0,m:0,s:0,ms:0})
        setFlag(0)
    }
    function resume() {
        setInterv(setInterval(run , 10))
        setFlag(1)
    }
    let updateH = time.h,updateM = time.m,updateS = time.s,updateMs = time.ms
    function run() {
        if (updateM === 60) {
            updateH++
            updateM = 0
        }
        else if (updateS === 60) {
            updateM++
            updateS=0
        }
        else if (updateMs === 99) {
            updateS++
            updateMs = 0;
        }
        updateMs++
        return setTime({h:updateH,m:updateM,s:updateS,ms:updateMs})
    }
    return(
        <>
            <div className="down">
                <div className="main">
                    <DisplayComponent time={time} />
                    <p><BtnComponent start={start} stop={stop} reset = {reset} resume={resume} flag = {flag}/></p>
                </div>
            </div>
        </>
    )
}