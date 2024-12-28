import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: "📋 Por hacer",
    tasks: [
      {
        id: uuidv4(),
        title: "Estudiar javascript",
      },
      {
        id: uuidv4(),
        title: "Estudiar html+css",
      },
      {
        id: uuidv4(),
        title: "Estudiar react",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "✏️ En progreso ",
    tasks: [
      {
        id: uuidv4(),
        title: "Curso javascript",
      },
      {
        id: uuidv4(),
        title: "Curso react",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "✅ Completado ",
    tasks: [
      {
        id: uuidv4(),
        title: "Curso HTML",
      },
    ],
  },
];
export default mockData;
