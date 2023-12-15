import React from "react";

const Contact = () => {
  return (
    <div className="m-auto h-screen max-w-[1240px] p-4">
      <h1 className="p-4 text-center text-2xl font-bold">
        Prosimy o zgłaszanie sugestii
      </h1>
      <form className="m-auto max-w-[600px]">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border p-3 shadow-lg"
            type="text"
            placeholder="Imię"
          />
          <input
            className="border p-3 shadow-lg"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className="my-2 w-full border p-3 shadow-lg"
          type="text"
          placeholder="Temat"
        />
        <textarea
          className="w-full border p-3 shadow-lg"
          cols="30"
          rows="10"
          placeholder="Wiadomość"
        ></textarea>
        <button className="mt-2 w-full border p-3 shadow-lg">Wyślij</button>
      </form>
    </div>
  );
};

export default Contact;
