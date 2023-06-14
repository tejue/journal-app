import "./TabBar.css";
import Badge from "../Badge/Badge";

export default function TabBar() {
  return (
    <section className="tabBar">
      <p>All Entries</p>
      <Badge />
      <p>Favorites</p>
      <Badge />
    </section>
  );
}
