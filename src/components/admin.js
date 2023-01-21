import React from 'react';
import {useLocation} from "react-router-dom";

function Admin() {

    if(!location.state.isSignedIn ) {
        return (
            <>
              <h1>Restricted Direct acess to the page</h1>
            </>
        )
    }
    return (
        <> 
         <h1>Admin</h1>
        </>
    );
}

export default  Admin;