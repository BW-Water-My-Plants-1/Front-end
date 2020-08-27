import React, {useState} from 'react'
import axios from 'axios'


const FunFact = ({FunFact, randomFunFact}) => {
    const [catFact, setCatFact] = useState([])
    let arr = [];

    const funFactOnClick = () => 
    axios.get('https://cat-fact.herokuapp.com/facts')
        .then(res => {
            debugger
            arr = res.data.all; // to edit
            setCatFact(res.data)
        })
        .catch(err => {
            debugger
        })
        .finally(() => {
            let random = Math.floor(Math.random() * arr.length);
            randomFunFact(arr, random)
        })

    return (
        <div>
            <h1>My friends</h1>
            {catFact.map(fact =>
                <div key ={fact.id}>
                    <h3>text: {fact.text}</h3>
                    <h4>type: {fact.type}</h4>
                {/* Made these map functions to map through the fun facts did not implement this -Emily */}
                </div>
            )}
            <button onClick={funFactOnClick}>Want a fun fact?</button>
        </div>
    )
}

export default FunFact 