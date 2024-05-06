import React from 'react';
import DataTable from './DataTable';

const CoursesTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Nombre del Curso',
        accessor: 'name',
      },
      {
        Header: 'Descripción',
        accessor: 'description',
      },
      {
        Header: 'Duración',
        accessor: 'duration',
      },
      {
        Header: 'Progreso',
        accessor: 'progress',
      }
    ],
    []
  );

  const data = React.useMemo(
    () => [
        {
          "id": 1,
          "name": "Seguridad en Minas",
          "description": "Normativas y procedimientos de seguridad en la minería",
          "duration": "6 semanas",
          "progress": "50%"
        },
        {
          "id": 2,
          "name": "Operación de Maquinaria Pesada",
          "description": "Manejo seguro y eficiente de maquinaria pesada en la minería",
          "duration": "8 semanas",
          "progress": "25%"
        },
        {
          "id": 3,
          "name": "Prevención de Riesgos Laborales",
          "description": "Identificación y prevención de riesgos en entornos industriales",
          "duration": "4 semanas",
          "progress": "75%"
        },
        {
          "id": 4,
          "name": "Curso 1",
          "description": "Curso avanzado sobre geología y exploración minera",
          "duration": "10 semanas",
          "progress": "70%"
        },
        {
          "id": 5,
          "name": "Curso 2",
          "description": "Técnicas modernas de extracción de recursos minerales",
          "duration": "12 semanas",
          "progress": "60%"
        },
        {
          "id": 6,
          "name": "Curso 3",
          "description": "Gestión eficiente de residuos en la industria minera",
          "duration": "8 semanas",
          "progress": "80%"
        },
        // Los siguientes datos son generados aleatoriamente
        {
          "id": 7,
          "name": "Curso 4",
          "description": "Gestión eficiente de residuos en la industria minera",
          "duration": "8 semanas",
          "progress": "80%"
        },
        // ...
        {
          "id": 32,
          "name": "Curso 28",
          "description": "Técnicas modernas de extracción de recursos minerales",
          "duration": "12 semanas",
          "progress": "60%"
        },
        {
          "id": 33,
          "name": "Curso 29",
          "description": "Gestión eficiente de residuos en la industria minera",
          "duration": "8 semanas",
          "progress": "80%"
        },
        {
          "id": 34,
          "name": "Curso 30",
          "description": "Curso avanzado sobre geología y exploración minera",
          "duration": "10 semanas",
          "progress": "70%"
        }
      ]
      ,
    []
  );

  return <DataTable columns={columns} data={data} />;
};

export default CoursesTable;
