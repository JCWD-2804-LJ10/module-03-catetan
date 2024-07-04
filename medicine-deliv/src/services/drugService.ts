import { Prisma } from "../models/prisma.ts";



interface Drugs{
    name: string;
    description: string;
    price: number;
    stock: number;
}

export const createDrug = async (data: {
  name: string;
  description: string;
  price: number;
  stock: number;
}) => {
  return Prisma.drug.create({ data });
};

export const getDrugs = async (
  filter: { name: string },
  page: number,
  limit: number
) => {
  if (filter && page && limit) {
    return Prisma.drug.findMany({
      where: { name: { contains: filter.name } },
      take: limit,
      skip: (page - 1) * limit,
      orderBy: { name: "desc" },
    });
  } else 
  {
   return Prisma.drug.findMany();
  }
};
export const getDrugById = async (id: number) => {
  return Prisma.drug.findUnique({ where: { id } });
};
export const updateDrugById = async (id: number ,data: Drugs) => {
 return Prisma.drug.update({ where: { id }, data });
}
export const deleteDrugById = async (id: number) => {
 return Prisma.drug.delete({ where: { id}});
}
