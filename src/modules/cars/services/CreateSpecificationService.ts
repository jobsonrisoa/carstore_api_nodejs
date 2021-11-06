import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}



class CreateSpecificationService {
    constructor(private specificationsRepostiory: ISpecificationsRepository) {}
       
    execute({ name, description }: IRequest) : void {
        const specificationAlreadyExists = this.specificationsRepostiory.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists")
        }
        
        this.specificationsRepostiory.create({
            name,
            description,
        });
    }
}






export { CreateSpecificationService };