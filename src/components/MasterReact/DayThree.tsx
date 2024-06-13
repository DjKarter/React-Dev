import React from "react";
import { useState } from "react";

const Counter = ({init, end}: {init:number, end: number}) =>{

    const [count, setCount] = useState(init);
    function incr() {
        setCount((count)=>count+1);
    }
    return (
        <>
            Initial value of the counter is: {init}
            <br />
            End of the counter at: {end}
            <br />
            The counter is: {count}
            <br />
            {
                (count < end) ?
                    <>
                        <i>Counter in progress</i>
                        <br/>
                        <button onClick={incr}>count+1</button>
                    </>:
                    <b>Counter stopped</b>
            }
        </>
    )
}


export const DayThree = () => {
    return (
        <>
            <>
                {
                    [0, 1, 2].map(function(i) {
                        return (
                            <React.Fragment key={i}>
                                Counter {i} defined by {`<Counter init='5' end='${10+i}' />`} <br/>
                                <Counter init={5} end={10+i} />
                                <br/><br/>
                            </React.Fragment>
                        )
                    })
                }
            </>
        </>
    )
}
