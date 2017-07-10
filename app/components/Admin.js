import React from 'react'

// This is a stateless functional component - no states just props
// 'this' keyword will not be available so just need 'props'
// also render() method is not necessary to display UI
function Admin (props) {

    return (
      <div className="background-1">
        <h1>Admin Page</h1>
      </div>
    )
  
}

export default Admin;