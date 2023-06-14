import "./EntryForm.css";
import Button from "../Button/Button.js";

export default function EntryForm({ entryFormHeader, labelInputTitle }) {
  return (
    <section className="entryForm">
      <h2 className="entryForm__titel">{entryFormHeader}</h2>
      <label htmlFor="inputTitle">{labelInputTitle}</label>
      <input id="inputTitle" type="text" required />
      <label htmlFor="inputMessage">Notes</label>
      <textarea id="inputMessage"></textarea>
      <Button />
    </section>
  );
}
