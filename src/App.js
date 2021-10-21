import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

import Layout from './Layout/Layout'
import AboutUs from './components/AboutUs'
import NotFoundPage from './pages/NotFoundPage'

import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Services from './components/Services'
import ServicesDetail from './pages/ServicesDetail'
import AuthProvider from './context/AuthProvider'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import PrivateRoute from './ProtectedRoute/PrivateRoute'
import Faq from './pages/Faq'

function App() {
  //End of Preloader

  return (
    <>
      <Router>
        <AuthProvider>
          <Layout>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/home' component={Home} exact />
              <Route path='/services' component={Services} exact />
              <PrivateRoute
                path='/services/:id'
                component={ServicesDetail}
                exact
              />
              <Route path='/about' component={AboutUs} exact />
              <Route path='/gallery' component={Gallery} exact />
              <PrivateRoute path='/contact' component={Contact} exact />
              <Route path='/faq' component={Faq} exact />
              <Route path='/login' component={Login} exact />
              <Route path='/signup' component={SignUp} exact />
              <Route path='*' component={NotFoundPage} exact />
            </Switch>
          </Layout>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
