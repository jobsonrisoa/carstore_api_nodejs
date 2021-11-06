import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';
const specificationRoutes = Router();

const specificationsRepostiory = new SpecificationsRepository();

specificationRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createSpecificationService = new CreateSpecificationService(specificationsRepostiory);
    
    createSpecificationService.execute({ name, description });

    return response.status(201).send();
    
})



export { specificationRoutes }