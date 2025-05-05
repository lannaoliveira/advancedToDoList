import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'; 
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { App } from '../imports/ui/App';

Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container);
  
  const router = createBrowserRouter([
    {
      path:"/",
      element: <App />
    },
  ]);

  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )

});
