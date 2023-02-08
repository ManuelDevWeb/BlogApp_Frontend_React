import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

// Components
import { Menu } from "../components/Menu";

// Contexto (Permite acceder al contexto)
import { AuthContext } from "../context/AuthProvider";

// Images
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { useContext } from "react";

const Single = () => {
  const [post, setPost] = useState([]);

  // Accediendo a los values (state y functions) del contexto provider
  const { currentUser } = useContext(AuthContext);

  // Permite saber la informacion de la URL. En este caso hacemos split para obtener la informacion del id que viene por la req
  const idPost = useLocation().pathname.split("/")[2];

  const navigate = useNavigate();

  // useEffect que se ejecuta cada que carga la pagina
  useEffect(() => {
    // Funcion asincrona para hacer llamado a la API y setear el valor de los posts
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/posts/${idPost}`
        );
        setPost(res.data.body[0]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [idPost]);

  // Function to delete post
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/api/posts/${idPost}`);
      // Redireccionamos
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  // Funcion para corregir el error de la descriocion (Se mostraba las etiquetas: <p>Nuevo post</p>)
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post.image}`} alt={`Img ${post.title}`} />
        <div className="user">
          {post.userImage ? (
            <img src={post.userImage} alt={`${post.username} Img`} />
          ) : (
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt={`${post.username} Img`}
            />
          )}

          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date_post).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=${idPost}`} state={post}>
                <img src={Edit} alt="Icon edit" />
              </Link>
              <Link>
                <img onClick={handleDelete} src={Delete} alt="Icon delete" />
              </Link>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {getText(post.desc)}
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export { Single };
