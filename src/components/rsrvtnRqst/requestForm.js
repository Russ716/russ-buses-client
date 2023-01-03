import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { fetchIt } from "../../utils/fetchIt";
import { useParams } from "react-router-dom";

export const RequestForm = () => {
	const { busId } = useParams();
	const BusBoy = localStorage.getItem("busboy");
	const [bus, loadBus] = useState({});

	const [request, updateRequest] = useState({
		reserveStart: "",
		reserveNights: 0,
		guest: BusBoy,
		bus: busId,
		owner: bus?.id,
		estimateCost: 0,
	});
	const fetchBus = useCallback(() => {
		return fetchIt(`http://localhost:8000/buses/${busId}`)
			.then(loadBus)
			.catch(() => loadBus({}));
	}, [busId]);

	useEffect(() => {
		fetchBus();
	}, [busId, fetchBus]);

	const history = useHistory();

	const submitRequest = (evt) => {
		evt.preventDefault();

		fetchIt(`http://localhost:8000/buses/${busId}/request`, {
			method: "POST",
			body: JSON.stringify(request),
		}).then(() => history.push("/requests"));
	};

	return (
		<form className="requestForm">
			<h2 className="requestForm__title">
				Reservation Request for bus # {bus.id}, owned by {bus.owner_name}
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
						type="text"
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
							let estimate = 0;
							let cost = copy.reserveNights * 150;
							if (copy.reserveNights > 1 && copy.reserveNights < 7) {
								estimate = cost * 0.9;
							} else if (copy.reserveNights >= 7 && copy.reserveNights < 14) {
								estimate = cost * 0.8;
							} else if (copy.reserveNights >= 14 && copy.reserveNights < 21) {
								estimate = cost * 0.7;
							} else if (copy.reserveNights >= 21 && copy.reserveNights < 28) {
								estimate = cost * 0.6;
							} else if (copy.reserveNights >= 28) {
								estimate = cost * 0.5;
							}
							copy.estimateCost = estimate;
							updateRequest(copy);
						}}
						required
						autoFocus
						type="text"
						id="reserveNights"
						className="form-control"
						placeholder="The request's nights needed"
					/>
				</div>
			</fieldset>

			<button onClick={submitRequest} className="btn btn-primary">
				Submit Request
			</button>
		</form>
	);
};
