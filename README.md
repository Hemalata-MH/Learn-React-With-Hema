# Learn-React-With-Hema - chapter 05 let's get hooked

my learnings

React File Structure - `https://legacy.reactjs.org/docs/faq-structure.html`

**Exports & Imports**
There are 2 types of exports - named export & default export

`Named Export` - **export const Title = () => {}**
`Named Import` - **import {Title} from "<filepath>";**

Create a component as const Title = () => {} &
`Default Export` - **export default Title**;
`Default Import` - **import Title from "<filepath>";**

There is another import where we can import all named exports as **import \* as AllExports from "<filepath>";** & same can be accessed as **<AllExports.Title/>** just like how we do for <React.Fragment/>

Created `constant.js(some developers name this config.js)` where we store the global values

**What are `states`in React**
Every component in react maintains state which holds particular value

We can use states using **useState** which returns an array that contains 2 elements. The first element is the local state variable name & the second element is the function.

We can do named import to access useState - `import {useState} from "react";`

**VVI -- The first element is used to store the value & the second element is the function where the local variable value gets updated & the updated value is again stored in the first element**

e:g - const [searchText, setSearchText] = useState()

To add default value
**javascript --> const searchText = "something";**
**React --> const [searchText, setSearchText] = useState("something");**

**Use of state variable** when there is a change to local state variable react will not know & that's why state variable is used as react keeps watching the state variable so that the changed value get's re-rendered on the browser
