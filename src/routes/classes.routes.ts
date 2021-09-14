import { Router } from "express";
import { createClassControlle } from "modules/Teachers/useCases/createClass";

const ClassesRoutes = Router()

ClassesRoutes.post('/', (request, response) => createClassControlle.handle(request, response))

export { ClassesRoutes}