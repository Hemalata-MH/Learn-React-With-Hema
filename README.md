# Learn-React-With-Hema - chapter 04 talk is cheap show me the code

my learnings
**Let's Build our app now - App Name is Hema's Kitchen**

`Our app layout will look like below`

1. Header (
   logo,
   navbars (
   home,
   about us,
   cart,
   contact us,
   )
   )
2. Body (
   seach bar,
   restuarantlist (
   restaurantcards (
   image,
   name,
   ratings,
   etc
   )
   )
   )
3. Footer (
   copyrights,
   links,
   reference,
   etc
   )

`Note - installing tailwind css so that I can start using it from scratch`

**Steps to install tailwindcss**

1. npm install -D tailwindcss postcss - will create a package in node_modules & will also get added to package.json as a dev dependency
2. npx tailwindcss init - execute tailwind css package so that it's get initialized in our project & generate tailwind.config.js file
3. create .postcssrc file in the root project & enable tailwindcss plugin as below
   {
   "plugins": {
   "tailwindcss": {}
   }
   }
4. Configure tailwind.config.js file
5. Add tailwindcss directives to index.css
6. Build & start your application to witness the changes

`React Fragment` is a component imported from React library. It's basically an empty tag which is used to get rid of the parent div which is mandatory to be used while creating JSX. How to write this:

```
<React.Fragment></React.Fragment>
or
<></>
```

`Inline CSS in React`

```
const styleObj = {
   border : 1px solid black,
}

const jsx = (
   <div style={styleObj}>
   <h1>Header</h1>
   </div>
)

or
const jsx = (
   <div style={{
   border : 1px solid black,
}}>
   <h1>Header</h1>
   </div>
)

```

`props` passing some data into components basically from parent component to child component. It's a shorthand for properties. It just like passing arguments & receiving parameters done in JS.

`VIRTUAL DOM` is a graphical representation of a DOM. React uses `RECONCILIATION` which uses \*\*Diff Algorithm" which make the performance of the application fast. `Diff Algorithm` keeps the track on the changes between the DOM & the Virtual tree & re-renders only that portion.

React uses `KEYS`. This is mainly used to re-render only the changed elements on the browser. The best usage of keys is when there is a same set of tags used so that the reconciliation happens smoothly

`REACT FIBRE` - in react 16 the diff algorithm changed & react introduced reconciliation engine that is _React Fibre_ which internally uses diff algorithm.

**Homework**

1. Why not to use index as a key?
   A. https://legacy.reactjs.org/docs/lists-and-keys.html
   https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/

References :-

1. https://github.com/acdlite/react-fiber-architecture
