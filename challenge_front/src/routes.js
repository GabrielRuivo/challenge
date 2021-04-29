import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import StudentsRegistred from './pages/StudentsRegistred';
import StudentInformations from './pages/StudentInformations';

const NotFoundBase = ({ type }) => <Redirect to={type === 'public' ? "/dashboard" : "/login"} />
const NotFoundPublic = () => <NotFoundBase type='public' />
const NotFoundPrivate = () => <NotFoundBase type='private' />

export default function Routes() {

	const [token, setToken] = useContext(AuthContext);
	const auth = localStorage.getItem('@token')

	return (
		<BrowserRouter>
			<Switch>

			{
				!token && !auth &&
				<React.Fragment>
                	<Route exact path="/"><Redirect to="/login" /></Route>
                	<Route path="/login" component={Auth}/>
					<Route component={NotFoundPrivate} />
				</React.Fragment>
			}
			{
				token && auth &&
				<React.Fragment>
                	<Route path="/dashboard" component={Dashboard}/>
                	<Route path="/registered-students" component={StudentsRegistred}/>
                	<Route path="/student-informations/:id" component={StudentInformations}/>
					<Route component={NotFoundPublic} />
				</React.Fragment>
			}
			</Switch>
		</BrowserRouter>
	)
}