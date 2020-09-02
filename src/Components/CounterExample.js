import React, { useState } from 'react'

export default function CounterExample() {

    const [count, setCount] = useState(10)

    return (
        <div>
                <h1>
                    {count}
                </h1>
                <h1 onClick={ () => setCount(count + 1)}>
                    ADD
                </h1>
                <h1 onClick={ () => setCount(count -1)}>
                    SUB
                </h1>
        </div>
    )
}
