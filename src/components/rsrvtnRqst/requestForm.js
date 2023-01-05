import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { fetchIt } from "../../utils/fetchIt";
import { useParams } from "react-router-dom";

export const RequestForm = () => {
	const { busId } = useParams();
	const BusBoy = localStorage.getItem("busboy");
	const [bus, loadBus] = useState({}); //* State 1
	let [estimate, updateEstimate] = useState(0); //* State 2
	const [owner, updateOwner] = useState(0) //* State 3
	const [ownerId, updateOwnerId] = useState() //* State 4
	const [request, updateRequest] = useState({ //* State 5
		reserveStart: "",
		reserveNights: 0,
		guest: BusBoy,
		bus: parseInt(busId),
		estimateCost: 0,
		
	});

	
	
	useEffect(() => {
		let cost = request.reserveNights * 150;
		if (request.reserveNights > 1 && request.reserveNights < 7) {
			estimate = cost * 0.9;
		} else if (request.reserveNights >= 7 && request.reserveNights < 14) {
			estimate = cost * 0.8;
		} else if (request.reserveNights >= 14 && request.reserveNights < 21) {
			estimate = cost * 0.7;
		} else if (request.reserveNights >= 21 && request.reserveNights < 28) {
			estimate = cost * 0.6;
		} else if (request.reserveNights >= 28) {
			estimate = cost * 0.5;
		} else {
			estimate = cost;}
			request.estimateCost = estimate;
			updateEstimate(estimate);
	}, [request])
	

	const fetchBus = useCallback(() => {
		return fetchIt(`http://localhost:8000/buses/${busId}`)
			.then(loadBus)
			.catch(() => loadBus({}));
	}, [busId]);

	
	useEffect(() => {
		fetchBus();
	}, [busId, fetchBus]);
	
	useEffect(() => {
	updateOwner(bus.owner)
	}, [bus])

	useEffect(() => {
		updateOwnerId(owner?.id)
	}, [owner])

	const history = useHistory();

	const submitRequest = ( request) => {
		
		const auth = localStorage.getItem("busboy");
		const token = JSON.parse(auth).token;
		return fetch(`http://localhost:8000/reservations`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": `Token ${token}`,
			},
			body: JSON.stringify(request),
		}).then(() => history.push("/requests"));
	};

	return (
		<form className="requestForm">
			<h2 className="requestForm__title">
				Reservation Request for bus # {bus.id}, owned by {owner?.full_name}
			</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="reserveStart">Reservation Start date:</label>
					<input
						onChange={(evt) => {
							const copy = { ...request };
							copy.reserveStart = evt.target.value;
							updateRequest(copy);
						}}
						required
						autoFocus
						type="date"
						id="reserveStart"
						className="form-control"
						placeholder="The request's starting date"
					/>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="reserveNights">Reservation Nights:</label>
					<input
						onChange={(evt) => {
							const copy = { ...request };
							copy.reserveNights = evt.target.value;
							updateRequest(copy);
						}}
						required
						autoFocus
						type="number"
						id="reserveNights"
						className="form-control"
						placeholder="The request's nights needed"
					/> Estimated Cost: ${estimate}
				</div>
			</fieldset>
			{/* <button onClick={submitRequest} className="btn btn-primary">
				Submit Request
			</button> */}
			<button onClick={editIt => {
				editIt.preventDefault()
				const newRequest = {
					reserveStart: request.reserveStart,
					reserveNights: parseInt(request.reserveNights),
					guest: request.guest,
					bus: request.bus,
					estimateCost: parseInt(request.estimateCost),
					owner: ownerId
				}
				submitRequest(newRequest)
					.then(()=> history.push(`/reservations`))
				}} className="btn btn-primary">				Request Reservation			</button>
		</form>
	);
};
