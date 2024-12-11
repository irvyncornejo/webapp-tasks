import { XCircleIcon } from '@heroicons/react/20/solid'

export default function MessageError() {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="shrink-0">
          <XCircleIcon aria-hidden="true" className="size-5 text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">Debes inicar sesión</h3>
          <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="list-disc space-y-1 pl-5">
              <li>¿Ya tienes cuenta? Inicar sesión</li>
              <li>¿No tienes cuenta? Crear cuenta</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}