const data = {
  kardex: [
    {
      semestre: "8",
      carrera: "ING. SISTEMAS COMPT.",
      especialidad: "SEGURIDAD INFORMATICA",
      periodos: [
        {
          periodo: "[AGO-DIC/2020]",
          materias: [
            {
              no: 1,
              materia: "CALCULO DIFERENCIAL",
              créditos: 5,
              calificación: 94,
            },
            {
              no: 2,
              materia: "TALLER DE ETICA",
              créditos: 4,
              calificación: 91,
            },
            {
              no: 3,
              materia: "TUTORIA",
              créditos: 0,
              calificación: 0,
              evaluación: "Ev.Ord.1ra",
            },
            {
              no: 4,
              materia: "FUNDAMENTOS DE PROGRAMACION",
              créditos: 5,
              calificación: 95,
            },
            {
              no: 5,
              materia: "MATEMATICAS DISCRETAS",
              créditos: 5,
              calificación: 93,
            },
            {
              no: 6,
              materia: "TALLER DE ADMINISTRACION",
              créditos: 4,
              calificación: 92,
            },
            {
              no: 7,
              materia: "FUNDAMENTOS DE INVESTIGACION",
              créditos: 4,
              calificación: 94,
            },
          ],
        },
        {
          periodo: "[ENE-JUN/2021]",
          materias: [
            {
              no: 8,
              materia: "CALCULO INTEGRAL",
              créditos: 5,
              calificación: 94,
            },
            { no: 9, materia: "ALGEBRA LINEAL", créditos: 5, calificación: 93 },
            {
              no: 10,
              materia: "CONTABILIDAD FINANCIERA",
              créditos: 4,
              calificación: 95,
            },
            { no: 11, materia: "QUIMICA", créditos: 4, calificación: 92 },
            {
              no: 12,
              materia: "PROGRAMACION ORIENTADA A OBJET",
              créditos: 5,
              calificación: 96,
            },
            {
              no: 13,
              materia: "PROBABILIDAD Y ESTADISTICA",
              créditos: 5,
              calificación: 94,
            },
            {
              no: 14,
              materia: "TUTORIA II",
              créditos: 0,
              calificación: 0,
              evaluación: "Ev.Ord.1ra",
            },
          ],
        },
      ],
    },
  ],
};

const jsonData = JSON.stringify(data);

console.log(jsonData);

export { data as mate };
