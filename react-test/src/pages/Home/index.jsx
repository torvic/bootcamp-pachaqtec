import { Link } from 'react-router-dom';
import { useState } from 'react';


const Home = () => {
	const [count, setCount] = useState(0);

	const handleAdd = () => {
		setCount(count + 1);
	}

	const handleRemove = () => {
		setCount(count - 1);
	}
	return (
		<div className="home">
			<h1>Home</h1>
			<nav>
				<ul>
					<li>
						<Link to="/login" >Login</Link>
					</li>
					<li>
						<Link to="/users" >Users</Link>
					</li>
				</ul>
			</nav>

			<h2>{count}</h2>
			<button onClick={handleRemove}>-</button>
			<button onClick={handleAdd}>+</button>
		</div>
	)
}

export default Home 
