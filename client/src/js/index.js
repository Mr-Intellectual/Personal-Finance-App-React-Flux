//import react into the bundle
import React from 'react';
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom';
import { AuthProvider } from 'react-auth-kit';



//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from './layout.js'

//
// const root = createRoot(document.querySelector("#app"))



//render your react application
// root.render(

//     <Layout />

// )

ReactDOM.render(

  <div className="App">
    <AuthProvider
    authType={'cookie'}
    authName={'_auth'}
    cookieDomain={window.location.hostname}
    cookieSecure={false}
    >
      <Layout />
    </AuthProvider>
  </div>,
  document.getElementById('app')
);

