"use client";

import Titulo from "../components/perfilTitulos";
import VerPassword from "../components/verPassword";
import SidebarMenu from "../components/SidebarMenu";
import NavBarMenu from "../components/NavBarMenu";
import "@/app/verCursos/verCursos.css";
import { Fragment } from "react";

const team = [
  {
    rol: "Administrador",
    nombre: "Maria Regina Rodriguez Martinez",
    correo: "mariarodriguez@neoris.mx",
  },
  {
    rol: "Analista",
    nombre: "Juan Carlos Ramirez Fernandez",
    correo: "juancramirez@neoris.mx",
  },
  {
    rol: "Analista",
    nombre: "Jose Antonio Martinez Herrera",
    correo: "joseamartinez@neoris.mx",
  },
  {
    rol: "Intern",
    nombre: "Ana Sofía Gutierrez Solís",
    correo: "anasgutierrez@neoris.mx",
  },
];

export default function MiPerfil() {
  return (
    <div className="app-container">
      <SidebarMenu />

      <div className="page-wrapper">
        <NavBarMenu />

        <div className="main-content">
          <div className="flex flex-col gap-6">

            <div className="space-y-6 p-4 rounded-xl text-white" style={{ backgroundColor: "#141414" }}>
              {/* Información Básica */}
              <section className="grid gap-2 p-2 border-b border-gray-500">
                <Titulo title="Información Básica" />
                <p className="font-semibold w-fit">
                  Nombre(s): <span className="font-normal text-gray-400 ml-2">Gabriel David</span>
                </p>
                <p className="font-semibold w-fit">
                  Apellido(s): <span className="font-normal text-gray-400 ml-2">Cruz Martinez</span>
                </p>
                <p className="font-semibold w-fit">
                  Fecha de Nacimiento: <span className="font-normal text-gray-400 ml-2">09/25/1987</span>
                </p>
                <p className="font-semibold w-fit">
                  Puesto: <span className="font-normal text-gray-400 ml-2">Analista Financiero</span>
                </p>
                <p className="font-semibold w-fit">
                  Con Neoris desde: <span className="font-normal text-gray-400 ml-2">Marzo 2021</span>
                </p>
              </section>

              {/* Contacto */}
              <section className="grid gap-2 p-2 border-b border-gray-500">
                <Titulo title="Contacto" />
                <p className="font-semibold w-fit">
                  Correo electrónico: <span className="font-normal text-gray-400 ml-2">gabrieldcruz@neoris.mx</span>
                </p>
                <p className="font-semibold w-fit">
                  Teléfono: <span className="font-normal text-gray-400 ml-2">8172263572</span>
                </p>
                <div className="flex flex-row items-center gap-4">
                  <VerPassword password="1Qwerty$" />
                  <button className="text-sm font-semibold text-white p-2 rounded-full bg-[#079A74] hover:bg-[#42796A]">
                    Cambiar contraseña
                  </button>
                </div>
              </section>

              {/* Equipo */}
              <section className="p-2 border-b border-gray-500 mt-4 space-y-2">
                <Titulo title="Mi Equipo" />
                <p className="text-gray-300 mb-2">Financiamiento PMI´s</p>
                <div className="grid [grid-template-columns:1fr_2fr_3fr] gap-y-2">
                  {team.map((miembro, i) => (
                    <Fragment key={i}>
                      <p>
                        <span className="font-semibold">Rol: </span>
                        <span className={miembro.rol === "Administrador" ? "text-teal-400 font-semibold" : ""}>
                          {miembro.rol}
                        </span>
                      </p>

                      <p>
                        <span className="font-semibold">Nombre: </span>
                        {miembro.nombre}
                      </p>

                      <p>
                        <span className="font-semibold">Correo: </span>
                        <a href={`mailto:${miembro.correo}`} className="text-blue-400 underline">
                          {miembro.correo}
                        </a>
                      </p>
                    </Fragment>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
