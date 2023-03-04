import React, { useEffect, useState } from "react";
import axios from "axios";
import IComment from "../../interfaces/IComment";
import TextField from "@mui/material/TextField";

const Comment = () => {
  ///pour l'axios/map///

  const [commentText, setCommentText] = useState<string>("");
  const [pseudo, setPseudo] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>(
    `Votre commentaire n'as pas été pris en compte !`
  );
  const [allComments, setAllComments] = useState<IComment[]>();
  const [userChoice, setUserChoice] = useState("");

  // ---- to update firstName change  ------
  const handlePseudo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPseudo(e.target.value);
  };

  // ---- to update lastName change  ------
  const handleCommentText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(e.target.value);
  };

  useEffect(() => {
    const getAllComments = async () => {
      //     // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = `http://localhost:8000/api/comments`;

      const { data } = await axios.get(url, {
        // withCredentials: true,
      });
      setAllComments(data);
    };
    getAllComments();
  }, []);

  const postComment = async (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    try {
      await axios.post<IComment>(`http://localhost:8000/api/comments`, {
        pseudo,
        date,
        commentText,
      });
      setPseudo("");
      setDate("");
      setCommentText("");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // pour gérer les erreurs de type axios
        if (err.response?.status === 401) {
          setErrorMessage("comm n'a pas été crée");
        }
      } else {
        // pour gérer les erreurs non axios
        if (err instanceof Error) setErrorMessage(errorMessage);
      }
    }
  };

  return (
    <div className="comment">
      <div className="comment__title">LIVRE D'OR</div>
      <form onSubmit={postComment}>
        <TextField
          id="standard-basic"
          type="text"
          name="pseudo"
          label="pseudo"
          onChange={handlePseudo}
          variant="standard"
          sx={{ m: 1, width: "15ch" }}
        />
        <TextField
          id="outlined-multiline-static"
          type="text"
          label="Votre demande"
          name="votre demande"
          onChange={handleCommentText}
          placeholder="Ecrivez votre texte ici"
          multiline
          rows={2}
          sx={{ m: 1, width: "50%" }}
        />

        <button className="form__btn" type="submit">
          laissez votre message ;){" "}
        </button>
      </form>

      {/* map de la base de données */}
      {allComments &&
        allComments
          .map(({ id, pseudo, date, commentText }) => (
            <div className="comment__card" key={id}>
              <div className="comment__card__paragraph">
               
                <p> {pseudo}</p>
                <> {date}</>

                <p> {commentText}</p>
              </div>
            </div>
          ))
          .reverse()}
    </div>
  );
};

export default Comment;
