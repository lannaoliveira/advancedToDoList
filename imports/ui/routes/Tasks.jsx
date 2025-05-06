import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useTracker } from "meteor/react-meteor-data";

export const Tasks = () => {

    const user = useTracker(() => Meteor.user());

    if (!user){
        throw new Error('Usuário não encontrado!');
    }

  return (
    <div className='tasks-container'>

    </div>
  )
}
