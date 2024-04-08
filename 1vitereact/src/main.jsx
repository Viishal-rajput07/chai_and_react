import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function Myname(){
//   return(
//     <h1>Vishal</h1>
//   )
// }

// const AnotherElement = {
//   type: "a", 
//   props: {
//       href: "http://google.com",
//       target: '_blank'
//   },
//   children: 'Visit google'
// }

let AnotherElement =(
  <a href="http://google.com" target="_blank">  visit Google </a>
)

const anotherUser = 'chai n code'

let reactElement = React.createElement(
  'a',
  {
    href: 'http://google.com',
    target: '_blank'
  },
  'visit Google ',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // Myname()
    // AnotherElement
    reactElement
    // <App />
    

)
