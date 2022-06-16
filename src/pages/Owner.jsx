import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import * as guestBookApi from "../apis/guestBook";

const Owner = () => {
  const { ownerId } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    guestBookApi.findAllByOwnerId(ownerId).then((res) => {
      setArticles(res.data);
    });
  }, [ownerId]);

  return (
    <>
      <h1>{ownerId}님의 방명록</h1>

      {articles.length === 0 && <p>방명록이 없습니다.</p>}

      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <NavLink to={`/articles/${article.id}`}>{article.title}</NavLink>
          </li>
        ))}
      </ul>

      <NavLink to={`/${ownerId}/create`}>
        <button> 방명록 남기기 </button>
      </NavLink>
    </>
  );
};

export default Owner;
