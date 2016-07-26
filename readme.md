# MUNCHGRAM
react + webpack + es6 + redux, redux-localstorage

### file structure
- app folder (your react code goes here)
    - components
    - config (routes.js)
    - utils (helper, we're using axios here. go visit this web: https://github.com/mzabriskie/axios)
- public (view, where you can see the things you done on app folder)
- package.json (json file that contain the things you use to help you build this app)
- webpack.config.js (your webpack configuration, usually is all things to do with your public/bundle.js file)

#### NB: use react-router version 1.0.1

### How to run app ?!
##### development
- go to your application folder using terminal
- run npm install
    - npm install -g webpack (see all this things on geting start with react, visit this for more info: https://github.com/distravantari/start-react )
- run webpack -w
- double click public/index.html

##### production
- go to your application folder using terminal
- change webpack.config.js configuration to production mode
- run webpack -p
- double click public/index.html

### about website
##### template we're using : https://themeforest.net/item/modarama-magazine-html5-template/6532785      

##### components :  (index)  
- Header
    - top menu
- Main Menu
    - upper-section
        - promotion
        -  most popular food
        -  latest news
        -  most discuss post
    - food-list
    - lower section
        - popular restaurant
        -  popular food based on category
        -  latest comment
    - recent-update (android/ios recent update)
- Main Section
- Footer  

##### REDUX
we store username, id and token in redux rightnow, there are 2 folders (action and reducers) and one file (store.js) on app folder, the reason why we don't put it on file structure above because react and redux is a completely deferent technology.  
here is the file structure for redux (all this things is located on your app folder)
- action
    - action-types.js
    -  user-state.js
- reducers
    - index.js
    - user-reducer.js
- store.js

###### example
to store a data : store.dispatch(getToken(result))
to receive a data : store.getState().userState.token
