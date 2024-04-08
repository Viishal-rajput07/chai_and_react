// function customReact(customElement, container){

//     let domElement = document.createElement(customElement.type);
//     domElement.innerHTML = customElement.children
//     domElement.setAttribute('href', customElement.props.href)
//     domElement.setAttribute('target', customElement.props.target)

//     container.appendChild(domElement)

// }

function customReact(customElement, container){

    let domElement = document.createElement(customElement.type);
    domElement.innerHTML = customElement.children

    for(let prop in customElement.props){
        if(prop === 'children') continue;

        domElement.setAttribute(prop, customElement.props[prop])

    }

    container.appendChild(domElement)

}
const customElement = {
    type: "a", 
    props: {
        title: 'google',
        href: "http://google.com",
        target: '_blank'
    },
    children: 'Visit google'
}

let container = document.querySelector('#root')
customReact(customElement, container)