import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Albumapi } from "./Albumapi";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Album.css";

export default function Albums() {
  let [Albums, setAlbums] = useState([]);
  // useEffect(() => {
  //   Albumapi.get()
  //     .then((response) => {
  //       setAlbums(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });
  let getAllAlbums = async () => {
    try {
      let response = await Albumapi.get();
      setAlbums(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllAlbums();
  }, []);

  return (
    <>
      <div className="container">
        <table className="table">
          <thead className="bg-dark">
            <tr>
              <th style={{ color: "white" }} scope="col">
                #
              </th>
              <th style={{ color: "white" }} scope="col">
                Title
              </th>
              <th style={{ color: "white" }} scope="col">
                Details
              </th>
              <th style={{ color: "white" }} scope="col">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {Albums.map((album) => {
              return (
                <tr key={album.id}>
                  <th
                    style={{ color: "rgb(13 202 240)" }}
                    className="col-1"
                    scope="row"
                  >
                    {album.id}
                  </th>
                  <td className="col-7">{album.title}</td>
                  <td className="col-2">
                    <NavLink
                      className="btn btn-info"
                      to={`/details/${album.id}`}
                    >
                      View Details
                    </NavLink>
                  </td>
                  <td className="col-2">
                    <button className="btn btn-warning btdele">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
