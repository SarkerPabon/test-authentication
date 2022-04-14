import { useParams } from "react-router-dom";

const ServiceDetails = () => {
	const { serviceId } = useParams();

	return <h1>ServiceDetails {serviceId}</h1>;
};

export default ServiceDetails;
