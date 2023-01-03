import React, { useEffect, useState, useCallback } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { fetchIt } from "../../utils/fetchIt";
import { isStaff } from "../../utils/isStaff";

export const Bus = () => {
  const [bus, loadBus] = useState({});
  const [hosts, syncHosts] = useState([]);
  const { busId } = useParams();
  const history = useHistory();

  const fetchBus = useCallback(() => {
    return fetchIt(`http://localhost:8000/buses/${busId}`)
      .then(loadBus)
      .catch(() => loadBus({}));
  }, [busId]);

  useEffect(() => {
    fetchBus();
  }, [busId, fetchBus]);

  useEffect(() => {
    fetchIt("http://localhost:8000/hosts")
      .then(syncHosts)
      .catch(() => syncHosts([]));
  }, []);

  const deleteBus = () => {
    fetchIt(`http://localhost:8000/buses/${busId}`, {
      method: "DELETE",
    }).then(() => history.push("/buses"));
  };

  const updateBus = (evt) => {
    const updatedBus = { ...bus, host: parseInt(evt.target.value) };

    fetchIt(`http://localhost:8000/buses/${busId}`, {
      method: "PUT",
      body: JSON.stringify(updatedBus),
    }).then(fetchBus);
  };

  //TODO - refactor this to see if a bus is reserved or rented for a time period.
  // const busStatus = () => {
  //     if (bus.date_completed === null) {
  //         if (bus.host) {
  //             return <span className="status--in-progress">In progress</span>
  //         }
  //         return <span className="status--new">Unclaimed</span>
  //     }
  //     return <span className="status--completed">Done</span>
  // }

  //TODO - refactor this to allow the host to assign a bus to a guest.
  // const hostPicker = (bus) => {
  //     if (isStaff()) {
  //         return <div className="bus__host">Assigned to {" "}
  //             <select
  //                 value={bus?.host?.id}
  //                 onChange={updateBus}>
  //                 <option value="0">Choose...</option>
  //                 {
  //                     hosts.map(e => <option key={`host--${e.id}`} value={e.id}>{e.full_name}</option>)
  //                 }
  //             </select>
  //         </div>
  //     }
  //     else {
  //         return <div className="bus__host">Assigned to {bus?.host?.full_name ?? "no one"}</div>
  //     }
  // }

  return (
    <>
      <section className="bus">
        <h3 className="bus__description"> 🚌 Bus # {bus.id} Description</h3>
        <div>
          {bus.color} {bus.year} {bus.make} {bus.model}
        </div>
        <div className="bus__owner">
          Owner: {bus.owner_name} {bus?.owner?.full_name}{" "}
        </div>
        <div className="bus__space">Capacity: {bus.capacity} </div>
        <footer className="bus__footer bus__footer--detail">
          <i className="bus__icon">
            Chauffeured: {bus.chauffeured ? "✔️" : "❌"}
          </i>
          <img className="bus__image" src={bus.image} alt={bus.make} />
          {isStaff() ? (
            <>
              <button onClick={deleteBus}>Delete</button>
              <button>
                <Link to={`/buses/${busId}/edit`} bus={bus}>
                  Edit
                </Link>
              </button>
            </>
          ) : (
            <button>
              <Link to={`/buses/${busId}/request`}>Request Reservation</Link>
            </button>
          )}
        </footer>
      </section>
    </>
  );
};
