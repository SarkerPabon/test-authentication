import React from "react";
import NotFoundImage from "../../../src/images/404.png";

const NotFound = () => {
	return (
		<div className='my-5'>
			<h2 className='text-center text-primary'>
				No Mechanic found right now, Mechanics are slepping.
			</h2>
			<div className='d-flex justify-content-center align-items-center'>
				<img src={NotFoundImage} className='img-fluid' alt='Found' />
			</div>
		</div>
	);
};

export default NotFound;
