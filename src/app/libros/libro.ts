export interface libro {
    isbn: number;
    titulo: string;
    sinopsis: string;
    n_paginas: string;
    editorial: editorial[];
    nombreAutor: string;
    apellidosAutor: string;
}
export interface librosTable {
  registers: $values[];
  PageIndex: number;
  PageSize: number;
  Total: number;
  TotalPages: number;
}
export interface $values {
  id: number;
  BookItems: libro[];
}

export interface editorial {
  nombre: string;
  sede: string;
}
