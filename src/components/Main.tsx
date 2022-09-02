import { QRCodeSVG } from "qrcode.react";
import React, { ChangeEventHandler, useState } from "react";
import "../styles/main.scss";
const Main = () => {
  const [text, setText] = useState<string>("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };
  return (
    <main className="main">
      <form>
        <label htmlFor="qr-text">QRCodeにしたい文字列</label>
        <input
          type="text"
          name="qr-text"
          id="qr-text"
          onChange={handleChange}
        />
      </form>
      <QRCodeSVG value={text} />
      <h2>{text}</h2>
    </main>
  );
};

export default Main;
