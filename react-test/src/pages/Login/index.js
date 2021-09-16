import ToDoForm from "../../componentes/ToDoForm"
import ToDoList from "../../componentes/ToDoList"
import { StoreProvider } from "../../context/ToDoCrudContext"

const Login = () => {
	return (
		<div>
			<StoreProvider>
				<h2>Login</h2>
				<ToDoForm/>
				<ToDoList/>
			</StoreProvider>
		</div>
	)
}

export default Login 
