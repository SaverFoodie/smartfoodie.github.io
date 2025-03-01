/*
import { useState } from "react";
import apiClient from "../../api/apiClient";

function Form(props) {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [email, setEmail] = useState("");
  const [nachricht, setNachricht] = useState("");
  const { setRefresh } = props;
  return (
    <>
      <form className="flex flex-col space-y-4">
        <div>
          <label>Vorname</label>
          <input
            type="text"
            value={vorname}
            onChange={(e) => {
              setVorname(e.target.value);
            }}></input>
        </div>
        <div>
          <label>Nachname</label>
          <input
            value={nachname}
            type="text"
            onChange={(e) => {
              setNachname(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>E-Mail Adresse</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Nachricht</label>
          <input
            type="text"
            value={nachricht}
            onChange={(e) => {
              setNachricht(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <button
            onClick={async (e) => {
              console.log({
                vorname,
                nachname,
                email,
                nachricht,
              });
              const data = { vorname, nachname, email, nachricht };
              apiClient.post("/api/UserInfo/Add", data).then(() => {
                setRefresh((prev) => !prev);
              });
              e.stopPropagation();
              e.preventDefault();
              return false;
              //submit
            }}
          >
            Absenden
          </button>
        </div>
      </form>
    </>
  );
}
export default Form;
*/