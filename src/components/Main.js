import React from 'react';

function Main() {
    const handleClick = () => {
        alert('Playlist created')
    }
    return (
      <div className='main'>
        <span className="make">Make your party fun!</span><br />  
        <p className="create">Create your own custom playlist today.</p><br />
        <button onClick={handleClick} className="btn-2">Create playlist</button>
      </div>
    )
  }
  
  export default Main;