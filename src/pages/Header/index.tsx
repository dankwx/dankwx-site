import { useState } from "react";
import styles from "./Header.module.scss";

export default function Header() {
  const [isActivated, setIsActivated] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [command, setCommand] = useState("");
  const [validCommand, setValidCommand] = useState(false);

  let valor = <></>;
  function detectCommand() {
    if (inputValue === "help") {
      setInputValue("help");
      setCommand("help");
      setValidCommand(false);
    } else if (inputValue === "about") {
      setInputValue("about");
      setCommand("about");
      setValidCommand(false);
    } else {
      setValidCommand(true);
      setInputValue(inputValue);
      setCommand("invalid");
    }
  }

  if (command === "help") {
    valor = (
      <>
        <br />
        <b style={{ color: "white" }}> help </b>
        <br />
        <b style={{ color: "white" }}> about </b>
        <br />
        <b style={{ color: "white" }}> contact </b>
        <br />
        <b style={{ color: "white" }}> projects </b>
        <br />
        <b style={{ color: "white" }}> skills </b>
        <br />
        <b style={{ color: "white" }}> resume </b>
        <br />
      </>
    );
  } else if (command === "about") {
    valor = (
      <>
        <br />
        <b style={{ color: "white" }}> Sobre mim: </b>
        <br />
      </>
    );
  }

  return (
    <div>
      <span style={{ color: "cyan" }}>~</span>
      <br />
      <span style={{ color: "#00ec4f" }}>a</span>
      <span style={{ color: "white" }}> dankwx</span>
      <div className={styles.neofetchCard}>
        <img
          style={{ width: "310", height: "310" }}
          className={styles.neofetchCardImage}
          src="https://i.pinimg.com/564x/64/f4/49/64f449d57e6a82f70e078340bea4dc7b.jpg"
          alt=""
        />
        <div className={styles.neofetchText}>
          <b style={{ color: "mediumslateblue" }}>danielpettres</b>
          <b style={{ color: "white" }}>@</b>
          <b style={{ color: "mediumslateblue" }}>gmail.com</b>
          <br />
          <b style={{ color: "white" }}>----------------------------</b>
          <br />
          <span className={styles.firstLine} style={{ color: "white" }}>
            <b>
              valor eu sou daniel (online conhecido como dankwx) <br />
            </b>
            <b>
              e sempre faço várias coisas que tenho vontade de criar <br />{" "}
              gosto de linux mas não uso, jogo dota{" "}
              <a
                href="https://steamcommunity.com/id/yoyoona/"
                target={"_blank"}
                className={styles.textLink}
                rel="noreferrer"
              >
                as vezes
              </a>
              . algo sobre mim:
              <br /> webdev, typescript, react, node.
            </b>
          </span>
          <br />
          <br />
          <span className={styles.secondLine} style={{ color: "white" }}>
            <b>
              links:{" "}
              <a
                href="https://github.com/dankwx"
                target={"_blank"}
                className={styles.textLink}
                rel="noreferrer"
              >
                github
              </a>{" "}
              <a
                href="https://www.last.fm/user/dnkocsh"
                target={"_blank"}
                className={styles.textLink}
                rel="noreferrer"
              >
                lastfm
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/daniel-kondlatsch/"
                target={"_blank"}
                className={styles.textLink}
                rel="noreferrer"
              >
                linkedin
              </a>
              <br />
            </b>
            <b>
              contato:{" "}
              <a
                href="https://mobile.twitter.com/dankwx"
                target={"_blank"}
                className={styles.textLink}
                rel="noreferrer"
              >
                twitter
              </a>{" "}
              <b
                className={styles.textLinkDiscord}
                onClick={() => {
                  navigator.clipboard.writeText("dankwx#1548");
                  setIsActivated(true);
                }}
                onMouseLeave={() => {
                  setIsActivated(false);
                }}
              >
                discord
              </b>{" "}
              <b className={styles.hide}>
                dankwx#1548 {isActivated ? "✔" : "📋"}{" "}
              </b>{" "}
              {/* // on mail:to "danielpettres@gmail.com" */}
              <a
                href="mailto:danielpettres@gmail.com"
                className={styles.textLink}
              >
                email
              </a>
            </b>
            <br />
            <br />
            <span style={{ background: "#C9BFBE" }}>&nbsp;&nbsp;&nbsp;</span>
            <span style={{ background: "#64aabc" }}>&nbsp;&nbsp;&nbsp;</span>
            <span style={{ background: "#689F86" }}>&nbsp;&nbsp;&nbsp;</span>
            <span style={{ background: "#596AD9" }}>&nbsp;&nbsp;&nbsp;</span>
            <span style={{ background: "#d08ed1" }}>&nbsp;&nbsp;&nbsp;</span>
            <br />
            <span style={{ background: "#B2A4A2" }}>&nbsp;&nbsp;&nbsp;</span>
            <span style={{ background: "#4892A5" }}>&nbsp;&nbsp;&nbsp;</span>
            <span style={{ background: "#52826C" }}>&nbsp;&nbsp;&nbsp;</span>
            <span style={{ background: "#3045D0" }}>&nbsp;&nbsp;&nbsp;</span>
            <span style={{ background: "#C16AC2" }}>&nbsp;&nbsp;&nbsp;</span>
          </span>
        </div>
      </div>
      <div className={styles.terminal}>
        <b style={{ color: "cyan" }}>~</b>
        <br />
        <b style={{ color: "#00ec4f" }}>a</b>
        <input
          className={styles.input}
          type="text"
          autoFocus={true}
          onBlur={({ target }) => target.focus()}
          onChange={({ target }) => setInputValue(target.value)}
          value={inputValue}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              detectCommand();
              setCommand(inputValue);
              setInputValue("");
            }
          }}
        />
        <div className={styles.valorComando}>{valor}</div>
        <br />
        <b
          style={
            !validCommand
              ? { display: "none" }
              : { display: "block", color: "white" }
          }
        >
          {" "}
          {command}: comando não encontrado
        </b>
        <br />
        <b
          style={{
            color: "#006b6b",
            fontSize: "0.9em",
            textShadow: "0 0 1px currentColor",
            fontWeight: "normal",
          }}
        >
          digite help para ver os comandos!
        </b>
      </div>
    </div>
  );
}
