import { Category } from "../model/Category";
import { ICategoriesRepository, ICreatedCategoryDTO } from "./ICategoriesRepository";

class PostgresCategoriesRepositories implements ICategoriesRepository {
    
    findByName(name: string): Category {
        console.log(name);
        return null;
    }
    list(): Category[] {
        return null;
    }
    create({ name, description }: ICreatedCategoryDTO): void {
        console.log(name,description);
    }
    
}

export { PostgresCategoriesRepositories }