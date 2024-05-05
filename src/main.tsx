import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route } from 'wouter';

import Home from '@/pages/index';
import Create from '@/pages/create';

import '@/styles/global.css'

const Router = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/create" component={Create} />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
