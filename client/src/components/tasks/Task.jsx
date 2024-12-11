export default function Task({ task }) {
    return (
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-4 sm:p-6">
          <div className="mt-5">
          <h3 className="text-base font-semibold text-gray-900">{task.title}</h3>
            <div className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
              <h4 className="sr-only">{task.status}</h4>
              <div className="sm:flex sm:items-start">
                
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                {task.status}
                </span>
                <div className="mt-3 sm:ml-4 sm:mt-0">
                  <div className="text-sm font-medium text-gray-900">Creada: {task.created_at}</div>
                  <div className="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
                    <div>Fecha fin: {task.dead_line}</div>
                  </div>
                  <div className="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
                    <div>Descripción: {task.description}</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:ml-6 sm:mt-0 sm:shrink-0">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }