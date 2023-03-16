# Learn-React-With-Hema - chapter 03 laying the foundation

my learnings

What is **`Babel ?`**
Babel is the transpiler/compiler, basically JS code that takes piece of some JS code & converts into browser readable code.

<ins>npx parcel index.html</ins> is used to run our application. But again this commands can be made shorthanded like <ins>npm run start/npm start</ins>

**'We need to create scripts inside package.json file. Just as below`**
"scripts": {
"start" : "parcel index.html",
"test": "jest"
},

**'To remove console logs from the app which parcel does not do this for us automatically, we need to follow below steps'**

1. install babel plugin transform remove console plugin from https://www.npmjs.com/package/babel-plugin-transform-remove-console

npm install babel-plugin-transform-remove-console --save-dev

2. configure above plugin in the .babelrc file which is manually created
   {
   "plugins": [ ["transform-remove-console", { "exclude": [ "error", "warn"] }] ]
   }

console's with error & warn will be displayed & console.log, console.table and others will be removed which are not included in the `exclude` field

`Note` whenever there is a siblings/children in the root elements or any components then `key` as a prop should be given as below

var h1 = React.createElement('h1', {key: 'h1'}, 'hello from h1');

var h2 = React.createElement('h2', {key : 'h2'}, 'hello from h2');

var div = React.createElement('div', {}, [h1,h2]);

`key` is the unique identifier

**'KEY RECONCILIATION'** changes specific DOM element when `key` prop is used. This means when there is a code change the entire DOM do not have to update instead only the changed element. This is mostly used for performance optimization. Read - https://reactjs.org/docs/reconciliation.html

_There are 2 ways to create elements in React_

1. using React.createElement - but creating children/nested elements becomes a huge mess hence JSX is prefered.
2. JSX - HTML like syntax in React & not HTML inside JS

`createElement ==> Object ==> HTML(DOM)`
`JSX ==> createElement ==> Object ==> HTML(DOM)`

**'Advantages of JSX'**
a) Human readable format
b) Syntactical sugar
c) Developer friendly
d) Less code
e) Maintainability
f) Reusability

**'JSX Expression '**
```
(
<>

   <h1>JSX</h1>
   <h2>inside JSX</h2>
   </>
)
```

**'React Element'**
```
const header = (
<>

   <h1>JSX</h1>
   <h2>inside JSX</h2>
   </>
)
```

```Render React Element - root.render(header)```

**'2 Types of Components'** - functions returning soe piece of JS code/JSX/React element
a. Functional Component - new way of writing components. It's a normal JS function
b. Class Based Component - old way of writing components

Functional/Class component starts with capital letter as below:
```
var HeaderComponent = () => {
return (

<div>
  <h1>Header component</h1>
</div>
)
}
```

return can also be omitted as below
```
var HeaderComponent = () => (

<div>
  <h1>Header component</h1>
  </div>
)
```

```Render React Component - root.render(<HeaderComponent/>)```

**'Nesting React Element inside React Component'**
```
var header = (
  <div>
  <h1> I am header element </h1>
  </div>
)
```

```
var HeaderComponent = () => {
return (
<div>
{header}
<h1> I am a functional component </h1>
</div>
)
}
```

**'Nesting React Component inside React Component'**
This is also known as component composition

```
var Header = () => {
  <div>
  <h1> I am header component </h1>
  </div>
}
```

```
var HeaderComponent = () => {
return (
<div>
<Header/> `or` {Header()}
<h1> I am a functional component </h1>
</div>
)
}
```

`JSX takes care of cross-side scripting attack (XSS) which means our JS code is safe because JSX sanitizes our JS code/data`

References :

1. https://reactjs.org/docs/react-without-jsx.html
2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
3. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type
4. https://babeljs.io/
5. https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.21.2&externalPlugins=&assumptions=%7B%7D
