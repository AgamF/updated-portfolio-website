export default function BackButton() {
  return (
    <button id="back-button" onClick={() => window.history.back()}>
       {".".replace(".", "<<")} Previous Page
    </button>
  );
}