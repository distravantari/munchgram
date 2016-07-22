# MUNCHGRAM
react + webpack + es6 + redux

### file structure
- app folder (your react code goes here)
    - components
    - config (routes.js)
    - utils (helper, we're using axios here. go visit this web: https://github.com/mzabriskie/axios)
- public (view, where you can see the things you done on app folder)
- package.json (json file that contain the things you use to help you build this app)
- webpack.config.js (your webpack configuration, usually is all things to do with your public/bundle.js file)

### How to run app ?!
##### development
- go to your application folder using terminal
- run npm install
    - npm install -g (see all this things on geting start with react, visit this for more info: https://github.com/distravantari/start-react )
- run webpack -w
- double click public/index.html

##### production
- go to your application folder using terminal
- change webpack.config.js configuration to production mode
- run webpack -p
- double click public/index.html
