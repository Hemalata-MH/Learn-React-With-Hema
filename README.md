# Learn-React-With-Hema - chapter 02 igniting our app

my learnings

1. 3 ways to inject react in our application
   a) via CDN as done in the chapter 01 inception-namaste-react
   b) via create-react-app
   c) via installing bundlers

What are BUNDLERS : used to optimise our app. Bundler is a package & package is a piece of code written by some developer.

1. Webpack is a bundler, which is used in the create-react-app,
2. parcel is another bundler which will be used in our project &
3. vite

To install package we need package manager. For which we can use either npm or yarn
npm does not stand for node package manager. In the official website of https://www.npmjs.com/ no where it is mentioned that npm stands for node package manager

Steps to install npm package

1. npm init or npm init -y (when -y is used it skips lots of options as package name, version, description & many more). Hence lets not skip this option & run npm install in the vs code terminal.

Note : After above steps, package.json file will be created in our application. package.json is the configuration file needed by the npm package to run itself

Why npm package in our applicaion ?
Because npm consists of packages those are used to run our react application

Steps to install parcel - https://parceljs.org/

1. npm install -D parcel
   (-D means devdependency. -D means we are installing parcel on developers machine as we don't won't this to be installed on the production machine. npm install --save-dev & npm install -D parcel does the same thing)

   A) package-lock.json file

   1. is created which specifies the exact version which is mainly used for production build basically package-lock.json file locks the version
   2. Never keep package-lock.json in .gitignore

   B) In the package.json file devDependency is added with parcel & it's version. The version has 3 variants

   1. caret (^) e:g "parcel": "^2.8.3" - which updates the parcel with minor version auto & the exact version is locked in the package-lock.json
   2. tilde (~) e:g "parcel": "~2.8.3" - which updates the parcel with major version auto & the exact version is locked in the package-lock.json
   3. nothing e:g "parcel": "2.8.3" - sticks to specified version

   C) node_modules folder got created in our app.

   1. node_module is like a database for the npm. If anything is installed in our react app that sits down in the node_modules folder
   2. node_modules should be kept in the .gitignore

Now let's get rid of react CDN links & install react package in our application

1. npm install react
2. npm install react-dom

Let's run our application using - npx parcel index.html.

1. This means our application will exceute parcel with the index.html as entry point
2. Running this command for the first time will provide new server (http://localhost:1234) where our application will be run
3. Two new folders will be created - parcel-cache & dist
4. Now import React from react & ReactDOM from react-dom/clients

parcel-cache - parcel requires some space to perform HMR, minification of files, removing consoles, filw watching & many more hence this is the folder created by parcel on it's own

dist - keeps the files minified

npx parcel build index.html - creates production build
npx parcel index.html - create development build

**`Parcel Features/why REACT fast`**

1. HMR
2. File watcher
3. File minification
4. Image optimization
5. Clean development code
6. Manages development & production build
7. Super fast build algorithm
8. Bundling
9. Caching while development
10. Compatible with older browser versions
11. HTTPS on development build - using npx parcel index.html --https
12. Manages port numbers
13. Consistent Hashing Algorithm
14. Zero configuration
15. Transitive dependencies - bundlers depending on different bundlers
16. Created server
17. Tree shaking - removing unwanted code. Parcel does this for us

browsersList in package.json - We can choose the browser versions on which our app should work

References :-

1. https://parceljs.org/features/development/
2. https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
3. https://parceljs.org/getting-started/webapp/
