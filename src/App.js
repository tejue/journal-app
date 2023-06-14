import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import EntryForm from "./components/EntryForm/EntryForm";
import Main from "./components/Main/Main.js";
import EntriesSection from "./components/EntriesSection/EntriesSection";

export default function App() {
  return (
    <>
      <Header>Journal</Header>

      <EntryForm
        entryFormHeader="New Entry"
        labelInputTitle="Motto"
      ></EntryForm>
      <EntriesSection></EntriesSection>
      <Footer>Journal App - 2028</Footer>
    </>
  );
}
