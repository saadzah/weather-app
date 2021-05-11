## Weather App
This is a responsive sample application that shows the current weather in Berlin, DE.

## Running the App
The application was created using create-react-app and uses react-scripts to run.

To run the application using npm you can run `npm install` and then `npm run` in the project folder and the application will open in the browser.

## Folder Structure 
```
weather-app/
  src/
    components -- contains app components shared and individual
    api        -- contains api request calls 
    actions    -- actions for redux
    pages      -- individual page layouts
    reducers   -- reducers for redux
    sagas      -- saga`s for middleware of redux-saga
    App.css
    App.js
    App.test.js
    index.css
    index.js
    theme.js   -- contains custom theme styles
    reportWebVitals.js
    setupTests.js
```

## Libraries/Tools
- React
- Redux for state management
- Redux-Saga for middleware
- Axios for api calls
- Material UI for UI Components and Surfaces
- DayJS for date manipulation
- Recharts for charting

## Docker
Added a `Dockerfile` so that it can be deployed anywhere and fit in a CI/CD pipeline. I guess a todo is that it needs configurable env`s as well.

To run it in docker just clone the repo and run the following commands:
- `docker build -t weather-app .`
- `docker run -p 80:80 weather-app`
