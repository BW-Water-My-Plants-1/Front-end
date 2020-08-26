// import React from 'react'
// import axios, { useState, useEffect } from 'axios'


// const FunFact = ({FunFact, randomFunFact}) => {
//     let arr = [];

//     const funFactOnClick = () => 
//     axios.get('https://cat-fact.herokuapp.com/facts')
//         .then(res => {
//             debugger
//             arr = res.data.all; // to edit
//         })
//         .catch(err => {
//             debugger
//         })
//         .finally(() => {
//             let random = Math.floor(Math.random() * arr.length);
//             randomFunFact(arr, random)
//         })

//     return (
//         <div>
//             <button onClick={funFactOnClick}>Want a fun fact?</button>
//         </div>
//     )
// }

// export default FunFact 

//   // fun fact
//   const randomFunFact = (arr, random) => {
//     console.log(arr[random].text)
//     setFunFact(String(arr[random].text))
//     debugger
//     console.log(funFact)
// }

// // end fun fact

// <FunFact 
// randomFunFact = {randomFunFact}
// /> 
