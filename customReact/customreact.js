/**
You are manually creating something similar to:

<a href="https://www.google.com" target="_blank">
  Click me to go Google
</a>

But instead of writing HTML directly, you are:

Creating a JavaScript object
Reading that object
Converting it into a real DOM element
Injecting it into the webpage

That process is the core idea behind React itself.

When you write:
<a href="https://google.com">Click</a>
React internally converts it into an object-like structure and finally creates real DOM elements.
Your code is simulating that process manually.

Conclude: UI can be represented as plain JavaScript objects.
 */
function customrender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    container.appendChild(domElement);
    */

const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in  reactElement.props) {
        if(prop === 'children') continue; // Skip children prop
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild (domElement);
}


const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target : '_blank',
    },
    children : "Click me to go Google"
}

const maincontainer = document.querySelector("#root");

customrender(reactElement, maincontainer);
