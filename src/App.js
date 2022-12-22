import React, { Suspense } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

// Main Pages
const HomePage = React.lazy(() => import('./pages/home'))
const PortfolioPage = React.lazy(() => import('./pages/portfolio'))
const GalleryPage = React.lazy(() => import('./pages/gallery'))
const ExperiencePage = React.lazy(() => import('./pages/experience'))
const Page404 = React.lazy(() => import('./pages/page404'))
// Project pages
const VisualTesting = React.lazy(() => import('./pages/projects/visualTesting'))

function App () {
  return (
  <>
    
    <HashRouter>
      <div className={"flex flex-col min-h-screen w-full items-center overflow-hidden bg-gradient-to-t from-gray-100 to-gray-100"}>
        <Navbar/>
        <div className={'flex flex-col items-center px-2 md:w-2/3 w-full mb-16'}>
          <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="experience" element={<ExperiencePage/>} />
                <Route path="portfolio/">
                  <Route path="" element={<PortfolioPage/>} />
                  <Route path="visualtesting" element={<VisualTesting/>} />
                </Route>
                <Route path="gallery/">
                  <Route path="" element={<GalleryPage/>} />
                  <Route path="visualtesting" element={<VisualTesting/>} />
                </Route>
                <Route path="*" element={<Page404/>} />
              </Routes>
          </Suspense>
        </div>
      </div>
    </HashRouter>
    
  </>
  )
}

export default App
