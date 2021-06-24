import { BrowserRouter as Router , Switch, Route} from "react-router-dom"

import Home from "./Home"
import Users from "./Users"
import Login from "./Login"

const  ReactRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home/>
				</Route>
				<Route exact path="/users">
					<Users/>
				</Route>
				<Route exact path="/login">
					<Login/>
				</Route>
			</Switch>
		</Router>
	)
}

export default ReactRouter
