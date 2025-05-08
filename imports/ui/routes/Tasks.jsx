import React, { useContext } from 'react'
import { Meteor } from 'meteor/meteor'
import { useTracker } from "meteor/react-meteor-data";
import { contextApp } from '../../../client/main';

export const Tasks = () => {

  const context = useContext(contextApp);

  const user = context?.user;


  return (
    <div className='tasks-container'>
      <h1>Pagina tasks {user?.username} </h1>
    </div>
  )
}
