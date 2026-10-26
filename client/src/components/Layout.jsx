import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Icon, initials } from "./ui";

export default function Layout({ items, active, onChange, children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="app">
      <header className="nav">
        <div className="brand"><span className="brand-mark">S</span><span className="brand-name">StaffSync</span></div>
        <nav className="pills" aria-label="Main">
          {items.map((i) => (
            <button key={i.key} className={`pill ${active === i.key ? "active" : ""}`} onClick={() => onChange(i.key)}>
              <Icon name={i.icon} size={18} /><span>{i.label}</span>
            </button>
          ))}
        </nav>
        <div className="who">
          <div className="who-text"><strong>{user.name}</strong><small>{user.role}{user.department ? `, ${user.department}` : ""}</small></div>
          <div className="avatar">{initials(user.name)}</div>
          <button className="icon-btn" title="Sign out" aria-label="Sign out" onClick={() => { logout(); navigate("/login"); }}>
            <Icon name="logout" size={18} />
          </button>
        </div>
      </header>
      <main className="content">{children}</main>
    </div>
  );
}
