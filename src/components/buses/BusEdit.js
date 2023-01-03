import React, { useState, useEffect, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { fetchIt } from "../../utils/fetchIt";

export const BusEdit = () => {
	const BusBoy = localStorage.getItem("busboy");
	const { busId } = useParams();
	// ! Initialize the state with empty values
	const [bus, updateBus] = useState({
		color: "",
		year: 0,
		make: "",
		model: "",
		odometer: 0,
		capacity: 0,
		owner: BusBoy.firstName + " " + BusBoy.lastName,
		image: "",
		chauffeured: false,
	});
	const history = useHistory();
	// Use the useEffect hook to make a GET request to retrieve the current information for the bus
	const fetchBus = useCallback(() => {
		return fetchIt(`http://localhost:8000/buses/${busId}`)
			.then(updateBus)
			.catch(() => updateBus({}));
	}, [busId]);

	useEffect(() => {
		fetchBus();
	}, [busId, fetchBus]);

	//   useEffect(() => {
	//     const fetchData = async () => {
	//       const response = await fetch(`http://localhost:8000/buses/${busId}`);
	//       const data = await response.json();
	//       updateBus(data);
	//     };
	//     fetchData();
	//   }, []); // The empty array means that the effect will only run once, on pageload

	const updateThisBus = (bus, busId) => {
		const auth = localStorage.getItem("busboy");
		const token = JSON.parse(auth).token;
		return fetch(`http://localhost:8000/buses/${bus.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": `Token ${token}`,
			},
			body: JSON.stringify(bus),
		});
	};

	const submitBus = (evt) => {
		evt.preventDefault();

		fetchIt(`http://localhost:8000/buses/${busId}`, {
			method: "PUT",
			body: JSON.stringify(bus),
		}).then(() => history.push("/buses")); //? History.push is similar to navigate.
	};

	return (
		<form className="busForm">
			<h2 className="busForm__title">Change Bus</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="color">Paint:</label>
					<input
						onChange={(evt) => {
							const copy = { ...bus };
							copy.color = evt.target.value;
							updateBus(copy);
						}}
						required
						autoFocus
						type="text"
						id="color"
						className="form-control"
						placeholder="The bus's dominant color"
						value={bus.color} //? This sets the value of the input to the current color of the bus
					/>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="year">Year:</label>
					<input
						onChange={(evt) => {
							const copy = { ...bus };
							copy.year = evt.target.value;
							updateBus(copy);
						}}
						required
						autoFocus
						type="text"
						id="year"
						className="form-control"
						placeholder="The bus's year"
						value={bus.year}
					/>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="make">Make:</label>
					<input
						onChange={(evt) => {
							const copy = { ...bus };
							copy.make = evt.target.value;
							updateBus(copy);
						}}
						required
						autoFocus
						type="text"
						id="make"
						className="form-control"
						placeholder="The bus's make"
						value={bus.make}
					/>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="model">Model:</label>
					<input
						onChange={(evt) => {
							const copy = { ...bus };
							copy.model = evt.target.value;
							updateBus(copy);
						}}
						required
						autoFocus
						type="text"
						id="model"
						className="form-control"
						placeholder="The bus's model"
						value={bus.model}
					/>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="odometer">Odometer:</label>
					<input
						onChange={(evt) => {
							const copy = { ...bus };
							copy.odometer = evt.target.value;
							updateBus(copy);
						}}
						required
						autoFocus
						type="text"
						id="odometer"
						className="form-control"
						placeholder="The bus's odometer"
						value={bus.odometer}
					/>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="capacity">Capacity:</label>
					<input
						onChange={(evt) => {
							const copy = { ...bus };
							copy.capacity = evt.target.value;
							updateBus(copy);
						}}
						required
						autoFocus
						type="text"
						id="capacity"
						className="form-control"
						placeholder="The bus's capacity"
						value={bus.capacity}
					/>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="image">Image:</label>
					<input
						onChange={(evt) => {
							const copy = { ...bus };
							copy.image = evt.target.value;
							updateBus(copy);
						}}
						required
						autoFocus
						type="text"
						id="image"
						className="form-control"
						placeholder="The bus's image"
						value={bus.image}
					/>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Chauffeured:</label>
					<input
						onChange={(evt) => {
							const copy = { ...bus };
							copy.chauffeured = evt.target.checked;
							updateBus(copy);
						}}
						required
						autoFocus
						type="checkbox"
						id="chauffeured"
						className="form-control"
						checked={bus.chauffeured} // Bind the checked attribute to the chauffeured property of the bus state object
					/>
				</div>
			</fieldset>
			<button onClick={editIt => {
				editIt.preventDefault()
				const changedBus = {
					id: busId,
					year: parseInt(bus.year),
					make: bus.make,
					model: bus.model,
					odometer: parseInt(bus.odometer),
					capacity: parseInt(bus.capacity),
					image: bus.image,
					chauffeured: bus.chauffeured,
					color: bus.color,
					owner: parseInt(bus.owner),
				}
				updateThisBus(changedBus)
					.then(()=> history.push(`/buses/${busId}`))
				}} className="btn btn-primary">				Edit Bus			</button>
		</form>
	);
};
