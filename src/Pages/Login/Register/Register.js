import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Register.css";

const Register = () => {
	const navigate = useNavigate();

	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	const handleRegister = (event) => {
		event.preventDefault();

		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;

		console.log(name, email, password);
		createUserWithEmailAndPassword(email, password);
		console.log(error);
	};

	if (user) {
		navigate("/home");
	}

	return (
		<div className='register-form'>
			<h2 className='text-center'>Please Register</h2>
			<form onSubmit={handleRegister}>
				<input type='text' name='name' placeholder='Your Name' />
				<input type='email' name='email' placeholder='Email Address' />
				<input type='password' name='password' placeholder='Enter Password' />
				<input type='submit' value='Register' />
			</form>
			<p className='text-center mt-4'>
				Already have an account?{" "}
				<Link to='/login' className='text-danger text-decoration-none'>
					Please Login
				</Link>
			</p>
		</div>
	);
};

export default Register;
