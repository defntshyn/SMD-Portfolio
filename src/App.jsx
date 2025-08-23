import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Works from './Pages/Works'
import About from './Pages/About'
import Contact from './Pages/Contact'
import RootLayout from './Layout/RootLayout'
import Error from './Pages/Error'
import Iridescence from './other/Iridescence'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="works" element={<Works />} />
        <Route path="works/:id" element={<Works />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <>
      <div className="backgroundAnimated">
        <Iridescence />
      </div>
      <div className="main-container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
