const Input = ({label, handleChange, value}) => {

	return (
		<div>
			<label htmlFor="">{label}</label>
			<input type="text" onChange={handleChange} value={value} />
		</div>
	)
}

export default Input
