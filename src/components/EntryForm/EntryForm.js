import Button from "../Button/Button.js";

export default function EntryForm() {
  return (
    <>
      <h2>NEW ENTRY</h2>
      <label htmlFrom="inputTitle">Motto</label>
      <input id="inputTitle" type="text" required />
      <label htmlFrom="inputMessage">Notes</label>
      <textarea id="inputMessage"></textarea>
      <Button />
    </>
  );
}
