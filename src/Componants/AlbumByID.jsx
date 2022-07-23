import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Albumapi} from "./Albumapi";

export function AlbumByID() {
  let { id } = useParams();
  let [Albums, setAlbums] = useState([]);
  useEffect(() => {
    Albumapi.getByID(id)
      .then((response) => {
        setAlbums(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="card col-3 container">
        <img
          style={{ padding: "10px" }}
          className="card-img-top"
          src="https://images.pexels.com/photos/5553635/pexels-photo-5553635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <div className="card-body">
          <h5 className="card-title">{Albums.title}</h5>
          <td className="mt-4 mb-3 d-flex justify-content-center">
            <NavLink to="/" className="btn btn-danger ">
              Back to List
            </NavLink>
          </td>
        </div>
      </div>
    </>
  );
}
