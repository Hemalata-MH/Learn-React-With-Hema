# Learn-React-With-Hema - chapter 06 exploring the world

my learnings

**Monolith & Micro services**
_Monolith service works on single page application modal which means all services will use one java project like user authentication, logs, UI, API's, SMS, notifications & many more_

_Microservices will use different applications like one application for authentication, one for logs, one for Ui, one for APi's & so on. This works on separation of concern which means UI team will work independently need not to worry when & how API team is working, similarly for logs team,authentication team & others.All this applications are integrated using different ports(8080, 8081, 7071,...) & one domain(github.com). Different teck stack can also be used depending on the use-cases like for UI react, API java, notifications golang, sms python & etc_

**When will the UI re-render**

1. _One when the states changes_
2. _when the props changes_

**2 ways to make an API call**

1. Load the website => make an API call => render the UI
2. Load the website => render the UI => make an API call => update the UI :- **The best & the recommended way**

**useEffect** - it's a hook which is used when the component have to be rendered only once or with a given condition by passing a dependency array. This is a named import by react (import {useEffect from "react"})

When the website is first opened, react will render the page/UI & then the useEffect will be called once

e:g

`useEffect()` - takes 2 arguments - callback function & the dependency array

```
useEffect(() => {
    console.log("hello");  // only once the console is printed when the page is loaded/rendered initially
},[])

useEffect(() => {
console.log("hello"); // this will print console once when the page is rendered initially/loaded & also each time the search input value is changed
},[searchText])

```

**Avoid Rendering Component**

1. Conditional rendering
   e:g :

```
return restaurantListsss?.length === 0 ? (
    <Shimmer />
  ) : (
    //UI to be displayed
  )
```

2. Early return
   e:g :

```
  if (!restaurantListsss) return null; // instead of null we can say <p>No data to display</p>
```

**Tasks**

1. Show all restaurant lists
2. Filter the restaurant list based on the search
3. Early return before rendering the actual UI
4. Add conditional chaining wherever required
5. Build login & logout functionality - pending from my end

   **Homework**

6. Optional chaining
7. Difference between JS statements & expressions
8. async await - why 2 times await

**References:-**

1. https://react.dev/learn/javascript-in-jsx-with-curly-braces
