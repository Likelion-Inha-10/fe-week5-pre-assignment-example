import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import * as guestBookApi from "../apis/guestBook";

const Article = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    guestBookApi.findById(articleId).then((res) => {
      setArticle(res.data);
    });
  }, [articleId]);

  const handleDeleteClick = () => {
    guestBookApi.deleteArticle(articleId).then(() => {
      navigate(-1);
    });
  };

  if (!article) return <p>로딩중</p>;

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <p>작성일: {article.createdAt}</p>

      <NavLink to={`/articles/${articleId}/edit`}>
        <button> 수정하기 </button>
      </NavLink>

      <button onClick={handleDeleteClick}> 제거하기 </button>
    </>
  );
};

export default Article;
