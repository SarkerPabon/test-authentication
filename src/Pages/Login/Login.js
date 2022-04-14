import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const emailRef = useRef("");
	const passwordRef = useRef("");

	const handleSubmit = (event) => {
		event.preventDefault();

		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		console.log(email, password);
	};

	const navigate = useNavigate();

	const navigateToRegister = (event) => {
		navigate("/register");
	};

	return (
		<div className='container w-50 mx-auto'>
			<h2 className='text-center text-primary'>Login Page</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						ref={emailRef}
						type='email'
						placeholder='Enter email'
						required
					/>
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						ref={passwordRef}
						type='password'
						placeholder='Password'
						required
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicCheckbox'>
					<Form.Check type='checkbox' label='Check me out' />
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
			<p className='text-center mt-4'>
				New to Genius Car?{" "}
				<small
					style={{ cursor: "pointer" }}
					className='text-danger'
					onClick={navigateToRegister}
				>
					Please Resgister
				</small>
			</p>
		</div>
	);
};

export default Login;
