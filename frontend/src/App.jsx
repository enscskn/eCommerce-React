import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer.jsx'
import Header from './components/Header.jsx'
import ProductList from './components/ProductList.jsx'
import RouterConfig from './config/RouterConfig.jsx'
import Loading from './components/Loading.jsx'

function App() {


  return (
    <>
      <PageContainer>

        <Header />
        <RouterConfig/>
        <Loading/>
      </PageContainer>
    </>
  )
}

export default App
