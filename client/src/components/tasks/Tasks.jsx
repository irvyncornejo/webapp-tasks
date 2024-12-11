import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Task from "./Task";
import NavBar from "../NavBar";

export default function Tasks() {

    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/"); // Redirige al login si no hay token
        return;
      }

      try {
        const response = await fetch("http://localhost:8000/api/tasks/", {
          headers: {
            Authorization: `Token ${token}`, // Autenticación usando el token
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setTasks(data.results);
        } else {
          setError("Error al obtener las tareas. Por favor intenta más tarde.");
        }
      } catch (err) {
        setError("Error de conexión. Por favor intenta más tarde.");
      }
    };

    fetchTasks();
  }, [navigate]);


  return (
    <>
        <NavBar />
        <h1 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Task App
        </h1>
        <div>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="">
                { tasks.map((task) => <Task key={task.id} task={task}/> ) }
            </div>
        </div>
    </>
    )
}