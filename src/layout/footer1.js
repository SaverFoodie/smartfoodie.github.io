/*
import { useState } from "react";
import instance from "../api/apiClient";

export default function Footer1() {
  const [form, setForm] = useState({});
  return (
    <div className="min-h-screen  flex items-center justify-center py-10 px-5 md:px-20">
      <div className="bg-[#b4d9f9] w-full max-w-6xl rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">

        <div className="w-full md:w-1/2 p-10 text-white bg-[#f8ba96]">
          <h2 className="text-4xl font-bold mb-6">
            Let's talk about fresh food in the workplace.
          </h2>
          <ul className="space-y-4 mb-10">
            <li>✓ We will get back to you within 30 minutes</li>
            <li>✓ Test for 3 months without contract commitment</li>
            <li>✓ Your next step to affordable and hassle-free catering</li>
          </ul>
          <div className="flex items-center space-x-4 bg-[#f8d3bd] p-4 rounded-lg">
            <img
              src="./xiaoting.jpg" // Replace with actual image path
              alt="Josephine Wichmann"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="text-xl font-semibold">Xiaoting</h4>
              <p className="text-gray-400">Head of Sales</p>
              <p className="text-blue-300">smartfoodie@smartfoodiegmbh.eu</p>
              <p className="text-blue-300">+49 15122019721</p>
              <p className="text-blue-300">Schellingstr. 109a, 80798 Munich</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white p-10 text-gray-700">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold">Vorname*</label>
                <input
                  type="text"
                  onBlur={(e) => {
                    setForm({ ...form, vorname: e.target.value });
                  }}
                  placeholder="David"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Nachname*</label>
                <input
                  onBlur={(e) => {
                    setForm({ ...form, nachname: e.target.value });
                  }}
                  type="text"
                  placeholder="Wagner"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">
                  E-Mail Adresse*
                </label>
                <input
                  type="email"
                  onBlur={(e) => {
                    setForm({ ...form, email: e.target.value });
                  }}
                  placeholder="meal@hungry.de"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">
                  Telefonnummer*
                </label>
                <input
                  type="tel"
                  onBlur={(e) => {
                    setForm({ ...form, telephone: e.target.value });
                  }}
                  placeholder="+49 156 666 6666"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">
                  Postleitzahl*
                </label>
                <input
                  type="text"
                  onBlur={(e) => {
                    setForm({ ...form, postcode: e.target.value });
                  }}
                  placeholder="Standort, an dem der Foodji aufgestellt werden soll"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">
                  Wie viele Mitarbeiter:innen werden die Mitarbeiterverpflegung
                  nutzen?
                </label>
                <select
                  onChange={(e) => {
                    setForm({ ...form, size: e.target.value });
                  }}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option>Bitte auswählen</option>
                  <option value={"small"}>1-10</option>
                  <option value={"middle"}>11-50</option>
                  <option value={"large"}>51-100</option>
                  <option value={"huge"}>100+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold">Nachricht</label>
              <textarea
                onBlur={(e) => {
                  setForm({ ...form, nachricht: e.target.value });
                }}
                placeholder="Nachricht"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
              ></textarea>
            </div>
            <div className="text-sm text-gray-500">
              <p>
                Durch Klicken auf 'Absenden' unten willigen Sie ein, dass Foodji
                die oben übermittelten personenbezogenen Informationen speichern
                und verarbeiten darf, um Ihnen die angeforderten Inhalte
                bereitzustellen. Ich habe die
                <a href="about:blank" target="_blank" className="text-blue-500 underline hover:no-underline"> Datenschutzbestimmungen </a>
                zur Kenntnis genommen.
              </p>
              <label className="flex items-center mt-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={(e) => {
                    setForm({ ...form, select: e.target.checked });
                  }}
                />
                Ich stimme zu, weitere Mitteilungen von Foodji zu erhalten.
              </label>
            </div>
            <button
              onClick={(e) => {
                if (!form?.select) {
                  alert("please select the checkbox");
                  return;
                }
                instance.post("/api/SmartFoodies", form);
                e.preventDefault();
                return;
              }}
              type="submit"
              className="w-full py-3 bg-[#F16E21] text-white rounded-lg font-semibold text-lg hover:bg-[#e05c19] transition"
            >
              Absenden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
*/
