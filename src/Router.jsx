import { Route, Routes } from 'react-router-dom'

import { Navbar } from './components'
import { SearchPage, TopHeadlines } from './pages'

export const Router = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<TopHeadlines />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="topheadlines" element={<TopHeadlines />} />
        </Routes>
    </>
  )
}
