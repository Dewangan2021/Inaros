import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import FormPage from './Pages/Form.jsx';
import AccordianPage from './Pages/AccordianPage.jsx';
import TablePage from './Pages/TablePage.jsx';
import NotificationPage from './Pages/NotificationPage.jsx';
import CardPage from './Pages/CardPage.jsx';
import Count from './Pages/Count.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ModalPage from './Pages/ModalPage.jsx';
import ToastPage from './Pages/ToastPage.jsx';
import DetailsForm from './Pages/DetailsForm.jsx';

const router = createBrowserRouter([
  {path: "/" , element: <App /> , children:[
    {
      path: "/" , element: <Dashboard />
    },
    {
      path: "/formPage" , element: <FormPage />
    },
     {
      path: "/accordianPage" , element: <AccordianPage />
    },
       {
      path: "/tablePage" , element: <TablePage />
    },
       {
      path: "/modalPage" , element: <ModalPage />
    },
       {
      path: "/notificationPage" , element: <NotificationPage />
    },
         {
      path: "/cardPage" , element: <CardPage />
    },
         {
      path: "/toastPage" , element: <ToastPage />
    },
    {
      path: "/countPage" , element: <Count />
    },
      {
      path: "/detailsForm" , element: <DetailsForm />
    },
  ] }
]);

createRoot(document.getElementById('root')).render(

  // <StrictMode>
    <RouterProvider router={router}/>
  
  // </StrictMode>,

)
