import { Product } from "./product.model";
import { CreateProductDto, updateProductDto, findProductDto } from "./product.dto";
import {faker} from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createAt: faker.date.recent(),
      updateAt: faker.date.recent(),
    }
  }

  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: Product['id'], changes:updateProductDto): Product => {
  const index = products.findIndex(item => item.id === id)
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}

export const findProducts = (dto: findProductDto): Product[] => {

  //dto.color = 'blue';
  //dto.tags=[];
  //dto.tags?.pop();
  //dto.tags?.push();

  return products;
}

