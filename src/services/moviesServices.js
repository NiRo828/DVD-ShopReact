const movies = [
  {
    id: 1,
    title: "Beavis and Butthead Do America",
    genre: "Comedy",
    rate: 9,
    stock: 5,
    liked: false,
  },
  { id: 2, title: "IronMan", genre: "Action", rate: 9, stock: 5, liked: false },
  { id: 3, title: "BatMan", genre: "Action", rate: 8, stock: 5, liked: false },
  {
    id: 4,
    title: "The Hulk",
    genre: "Action",
    rate: 6,
    stock: 5,
    liked: false,
  },
  {
    id: 5,
    title: "Vatos Locos",
    genre: "Amazing",
    rate: 10,
    stock: 5,
    liked: false,
  },
  { id: 6, title: "PacMan", genre: "Comedy", rate: 8, stock: 5, liked: false },
  {
    id: 7,
    title: "The Never Ending Story",
    genre: "Adventure",
    rate: 10,
    stock: 1,
    liked: false,
  },
];

export const getMoviesFromDB = () => {
  // Usually we would get the movies from a database
  return movies;
};
