"use client";
import React from "react";
import { useGetAllJsonQuery } from "./redux/services/apiService";
import "./globals.css";

function page() {
  const { data } = useGetAllJsonQuery();
  return (
    <div>
      {data?.map((userData) => (
        <section className="user-box" key={userData.id}>
          <span>
            <p></p>
            <p>User ID: {userData.userId}</p>
            <p>ID:{userData.id}</p>
            <p>Title:{userData.title}</p>
            <p>Completed:{userData.completed ? "Yes" : "No"}</p>
          </span>
          <div>
            <button>editar</button>
            <button>eliminar</button>
          </div>
        </section>
      ))}
    </div>
  );
}

export default page;
