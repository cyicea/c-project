import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Message } from '@cyicea-workspace/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    // fetch('/api')
    //   .then((r) => r.json())
    //   .then(setMessage);
    axios.get(`/api`,{
      params:{
        name:'a'
      }
    })
    // .then(({data}) => setMessage(data));

    // .then(({data})=>data)
    // .then(setMessage);
    
    .then((r) => r.data)
    .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to cyicea-app!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Extensible Build Framework"
        />
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
