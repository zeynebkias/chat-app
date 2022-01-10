import React from 'react'
import { useState } from "react";


function Cafe({Menu}) {



    return (
        <div>
            <h1>Cafe</h1>
            <h5>Menu</h5>
            <div>{Menu.map(item => (<p>{item}</p>))}</div>
            



        </div>
    )
}

export default Cafe;
