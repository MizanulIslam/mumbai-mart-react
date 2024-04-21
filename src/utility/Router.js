import App from '../App.js';
import {createBrowserRouter, redirect } from 'react-router-dom';
import {Home} from '../Components/home/Home.js';
import { Customers } from '../Components/customers/Customers.js';
import { Products }  from '../Components/Products/Products.js';
// import {Register} from './register/Register';
// import {Login} from './login/Login';

const router=createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          loader:  () => redirect('home'),
        },
        {
          path:'home',
          element:<Home></Home>,
        //   children:[
        //     {
        //       path:'child1',
        //       element:<Child1></Child1>
        //     },
        //     {
        //       path:'child2',
        //       element:<Child2></Child2>
        //     }
        //   ]
        },
        {
          path:'customers',
          element:<Customers></Customers>
        },
        {
          path:'products',
          element:<Products></Products>
        }
        // {
        //   path:'register',
        //   element:<Register></Register>
        // },
        // {
        //   path:'login',
        //   element:<Login></Login>
        // }
      ]
    },
    
  ]);

  export function getRouter(){
    return router;
}
  