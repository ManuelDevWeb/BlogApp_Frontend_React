import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";

// React Quill (Text Editor)
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Contexto (Permite acceder al contexto)
import { AuthContext } from "../context/AuthProvider";

const Write = () => {
  // Almacenamos el state que viene al dar click en el logo de editar post
  const postEdit = useLocation().state;

  const [value, setValue] = useState(postEdit?.desc || "");
  const [title, setTitle] = useState(postEdit?.title || "");
  const [file, setFile] = useState(postEdit?.image || "");
  const [cat, setCat] = useState(postEdit?.cat || "");

  // Accediendo a los values (state y functions) del contexto provider
  const { currentUser } = useContext(AuthContext);

  // Funcion que permite subir imagenes
  const uploadImage = async () => {
    try {
      // Esto hace las veces de BODY
      // Los objetos FormData le permiten compilar un conjunto de pares clave/valor para enviar mediante XMLHttpRequest
      const formData = new FormData();

      // Asignando el valor a la clave file
      formData.append("file", file);

      const res = await axios.post(
        "http://localhost:8800/api/upload",
        formData
      );

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  // Funcion que se ejecuta al dar click en el boton Publish or Update
  const handleClick = async (e) => {
    e.preventDefault();

    // Upload file and image to server
    const imageUrl = await uploadImage();

    try {
      // Si existe un state de postEdit es porque estamos actualizando, sino estamos creando uno nuevo
      postEdit
        ? await axios.patch(`http://localhost:8800/api/posts/${postEdit.id}`, {
            title,
            desc: value,
            cat,
            image: file ? imageUrl : "",
            uid: currentUser.id,
          })
        : await axios.post("http://localhost:8800/api/posts", {
            title,
            desc: value,
            cat,
            image: file ? imageUrl : "",
            date_post: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            uid: currentUser.id,
          });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>

      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            name=""
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>

        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "art"}
              name="cat"
              value="art"
              id="art"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "science"}
              name="cat"
              value="science"
              id="science"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "technology"}
              name="cat"
              value="technology"
              id="technology"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "cinema"}
              name="cat"
              value="cinema"
              id="cinema"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "design"}
              name="cat"
              value="design"
              id="design"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "food"}
              name="cat"
              value="food"
              id="food"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Write };
