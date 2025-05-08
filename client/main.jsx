import React, { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'; 
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { App } from '../imports/ui/App';
import { Tasks } from '../imports/ui/routes/Tasks';
import { Welcome } from '../imports/ui/routes/Welcome';

export const contextApp = createContext();

const ContextComponent = ({children}) => {
  const [user, setUser] = useState();

  const alteraUsuario = (usuario) => {
    console.log("Altera usuario",usuario);
    setUser(usuario);
  }

  return (
    <contextApp.Provider value={{user, alteraUsuario}}>
      {children}
    </contextApp.Provider>
  );
}

Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container);

    let user = ""
  
  const router = createBrowserRouter([
    {
      path:"/",
      element: <App />
    },
    {
      path:"/welcome",
      element: <Welcome />
    },
    {
      path:"/tasks",
      element: <Tasks />
    },
  ]);

  root.render(
      <ContextComponent>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </ContextComponent>
  )

});
