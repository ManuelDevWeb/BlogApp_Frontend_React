import { useEffect, useState } from "react";
import axios from "axios";

const Menu = ({ cat }) => {
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     image:
  //       "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     image:
  //       "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     image:
  //       "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     image:
  //       "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  // ];

  const [posts, setPosts] = useState([]);

  // useEffect que se ejecuta cada que cambia cat
  useEffect(() => {
    // Funcion asincrona para hacer llamado a la API y setear el valor de los posts
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/posts/?cat=${cat}`
        );
        setPosts(res.data.body);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Other posts you may Like</h1>
      {
        // Iterando sobre los posts
        posts.map((post) => (
          <div className="post" key={post.id}>
            <img src={`../upload/${post.image}`} alt={`Img ${post.title}`} />
            <h2>{post.title}</h2>
            <button>Read More</button>
          </div>
        ))
      }
    </div>
  );
};

export { Menu };
