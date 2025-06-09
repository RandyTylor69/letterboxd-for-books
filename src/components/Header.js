export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <span class="material-symbols-outlined" id="logo">book_ribbon</span>
        <h1>BookerBoxd</h1>
      </div>
      <div className="user-container">
        <button class="user-btn">DEPAYSS</button>
        <button class="user-btn">BOOKS</button>
        <button class="user-btn">LISTS</button>
        <button class="user-btn">FOLLOWERS</button>
        <button class="user-btn">JOURNAL</button>
        <button class="log-btn">+ LOG</button>
      </div>
    </header>
  );
}
