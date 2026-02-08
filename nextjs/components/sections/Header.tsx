export default function Header() {
  return (
    <header style={{ padding: "20px", borderBottom: "1px solid #333" }}>
      <nav style={{ display: "flex", gap: "20px" }}>
        <a href="/">Home</a>
        <a href="/over-ons">Over ons</a>
        <a href="/diensten">Diensten</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
