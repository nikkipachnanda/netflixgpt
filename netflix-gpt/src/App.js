import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from './components/Browse';
import Login from './components/Login';

function App() {

  const appRouter = createBrowserRouter ([
    { 
      path:"/",
      element:<Login/>
    },
    { 
      path:"/browse",
      element:<Browse/>
    }
  ])

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
