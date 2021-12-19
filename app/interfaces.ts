export interface Skill {
  name: string;
  level: string;
}

export interface Product {
  id: number;
  name: string;
  material: string;
}

export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  skills: Skill[];
  products: number[];
}

export interface Corporation {
  products: Product[];
  employees: Employee[];
}
