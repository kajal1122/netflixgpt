# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



-- Created new project with npx create-react-app
-- configured tailwind 
-- Application overview
    -- Authentication
        -- First signup/login page will come
        -- After authentication user will come to main screen , where user can browse movies
    -- Main Body 
        -- Movie videos playing in background 
        -- TITLE AND DESCRIPTION 
    -- Netflix GPT 
        -- Input box for suggestion 
        -- Result box 

-- Work done so far
        -- Create ReactApp setup
        -- tailwind
        -- header
        -- login form
        -- need to customize login form 
        -- we are using useRef() to ref fields and we can use the hook 
               - email = useRef(null)// null is initial value 
                --<input ref={email} .....>
        -- created firebase project 
          -- install firebase and firebase CLI tools using command given on screen 
          -- Added firebase config in firebase.js file 
          -- enabled email/password authentication on firebase 
          -- did firebase init to intialize the project
          -- created the build using npm run build 
          -- hosted the app on firebase using firebase deploy 

        -- creating new users when they click on signup 
         -- need to use firebase auth - folllow decumentation https://firebase.google.com/docs/auth/web/password-auth
         --  for signUp and login , we will firabase apis 
         --  and based on that we can show error msg

         --- next task is to create a store and save our users there 
            -- Steps to do that ---
                -- npm install react-redux redix-toolkit 
                --  After that we will create store , for that make a 
                 userStore.js and we will createStore and slice .
                -- for creating store , we will use configure store and for 
                now we will pass reducer as empty array 
                -- Now we will create user slice in different js file name 
                users.js
                -- we will use useEffect and add evenlistner onAuthStateChanged is header cahnge , as this is the component hat will be rendered throughout the application 
                -- As this Header component will be called multiple times , but we need to add evenlistener only when auth state change happens 
                -- so we will need to unsubscribe the eventlistener for the cleanup process
                -- this can be done by returning function that will unsubscribe the added evenlistener 
                -- by default , auth onAuthStateChanged returns unsubscribe , that can be used .
            -- Created Constnt.js and moved all constants in there 
            -- created account of tmdb and got access to token key 
            -- created nowPlayingMovie slice to store list of results of nowplayingMovies api result 



