import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Task from "./Task";
import NavBar from "../NavBar";
import MessageError from "../message/Error";
import FormTask from "./FormTask"



export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [count, setCount] = useState(0);

    const fetchTasks = async (url="http://localhost:8000/api/tasks/") => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }

      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTasks(data.results);
          setNextPage(data.next);
          setPrevPage(data.previous);
          setCount(data.count);

        } else {
          setError("Error al obtener las tareas. Por favor intenta más tarde.");
        }
      } catch (err) {
        setError("Error de conexión. Por favor intenta más tarde.");
      }
    };

    useEffect(() => {
      fetchTasks();
  }, [navigate]);

    const handleAddTask = (newTask) => {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const haldleError = (msg) => {
      setError(msg)
    };

  return (
    <>
        <NavBar />
        <FormTask onSave={handleAddTask} handleError={haldleError} />
        <h1 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Task App
        </h1>
        <div>
            {error && <MessageError principal_msg={error}/>}
            <div className="">
                { tasks.map((task) => <Task key={task.id} task={task}/> ) }
            </div>
        </div>
        <nav
          aria-label="Pagination"
          className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
        >
          <div className="flex flex-1 justify-between sm:justify-end">
            { !prevPage && !nextPage ?  null :
              (<><button
              onClick={() => fetchTasks(prevPage)}
              disabled={!prevPage}
              className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            >
              Anterior
            </button><button
              onClick={() => fetchTasks(nextPage)}
              disabled={!nextPage}
              className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            >
                Siguiente
              </button></>)
              }
          </div>
      </nav>
    </>
    )
}