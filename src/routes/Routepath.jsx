import React, { lazy } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Layout from '../components/Layout'
import Error from '../components/Error'
const Home = lazy(() => import('../pages/Home'))
const Tvshows = lazy(() => import('../pages/Tvshows'))
const TVid = lazy(() => import('../pages/TVid'))
const Search = lazy(() => import('../pages/Search'))

export default function Routepath() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path='tvshows' element={<Tvshows />} />
        <Route path='tvshow/:tvid' element={<TVid />} />
        <Route path='search' element={<Search />} />
        <Route path='*' element={<Error />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}
