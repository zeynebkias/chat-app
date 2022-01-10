import React from 'react'
import { useState } from "react";


function Client({input, event, choise, output}) {
    return (
        <div>
            <h1>Client</h1>
            <h5>Je veux :</h5>
            <form onSubmit={output}>
                 <input type="text" value={input} onChange={event}/>
                 <input type="submit" value="Demander"/>
            </form>


            <h5>Serveur : </h5>   

            <div>
            {choise}

            </div>


        </div>
    )
}

export default Client
