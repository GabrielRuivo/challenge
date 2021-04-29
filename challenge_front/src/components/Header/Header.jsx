import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { NavLink, useHistory } from 'react-router-dom';
import { api } from '../../services/api';

import { DivHeader } from './style';

const Header = (props) => {

   const [token, setToken] = useContext(AuthContext)

	const history = useHistory();

	async function handleLogout() {

		try {
            await api.get('/logout').then(res => {
                const response = res.data;
                console.log(response)
                setToken(localStorage.removeItem('@token'))
                history.push('/')
            })

		} catch (error){
			console.log('Failed to log out')
		}
   }
   
   return(
      <DivHeader>
         <div className="div-title-header" >
            <h1>Students Platform</h1>
            <span className="border-bottom-title" /> 
         </div>

         <div className="div-links-header" >
            <span className="NavLink-2-header" >{props.username}</span>
            <span  onClick={handleLogout} className="NavLink-2-header" to="/login">Logout</span>
         </div>
      </DivHeader>
   );
}

export default Header;