import { Suspense } from 'react'
import './App.css'
import Spinner from './components/Spinner'
import Routepath from './routes/Routepath'

export default function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routepath />
      </Suspense>
    </>
  )
}
