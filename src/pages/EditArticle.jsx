import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as guestBookApi from "../apis/guestBook";

const EditArticle = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    guestBookApi.findById(articleId).then((res) => {
      setTitle(res.data.title);
      setBody(res.data.body);
    });
  }, [articleId]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = () => {
    guestBookApi
      .updateArticle(articleId, title, body)
      .then((res) => {
        navigate(-1);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <input
        type="text"
        placeholder="제목"
        onChange={handleTitleChange}
        value={title}
      />
      <br />
      <textarea
        type="text"
        placeholder="본문"
        onChange={handleBodyChange}
        value={body}
      />
      <br />
      <button onClick={handleSubmit}> 방명록 남기기! </button>
    </>
  );
};

export default EditArticle;
