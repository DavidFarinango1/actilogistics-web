import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ServiciosPage from "../pages/servicios/page";
import SostenibilidadPage from "../pages/sostenibilidad/page";
import ContactoPage from "../pages/contacto/page";
import MisionVisionPage from "../pages/mision-vision/page";
import FilosofiaCorporativaPage from "../pages/filosofia-corporativa/page";
import CoberturaPage from "../pages/cobertura/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/servicios",
    element: <ServiciosPage />,
  },
  {
    path: "/sostenibilidad",
    element: <SostenibilidadPage />,
  },
  {
    path: "/mision-vision",
    element: <MisionVisionPage />,
  },
  {
    path: "/filosofia-corporativa",
    element: <FilosofiaCorporativaPage />,
  },
  {
    path: "/cobertura",
    element: <CoberturaPage />,
  },
  {
    path: "/contacto",
    element: <ContactoPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
