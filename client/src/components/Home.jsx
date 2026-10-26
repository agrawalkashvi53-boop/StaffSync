import { Link } from "react-router-dom";
import { useAuth, roleHome } from "../context/AuthContext";

const FEATURES = [
  ["01", "Attendance", "One-tap check-in and check-out with a clear history for employees and a daily summary for HR."],
  ["02", "Leave", "Employees apply online. Managers and HR approve or reject and the status updates straight away."],
  ["03", "Announcements", "Post updates to everyone, or only to employees or managers."],
  ["04", "Training", "Managers create programs and assign them to team members, who see them on their dashboard."],
  ["05", "Secure access", "Hashed passwords, token-based sign-in and role-based permissions on every request."],
];

export default function Home() {
  const { user } = useAuth();
  const cta = user ? roleHome[user.role] : "/register";
  return (
    <div className="land">
      <section className="l-hero">
        <header className="land-nav">
          <Link to="/" className="brand"><span className="brand-mark">S</span><span className="brand-name">StaffSync</span></Link>
          <div className="actions">
            {user ? <Link to={roleHome[user.role]} className="btn btn-lime">Open dashboard</Link> : (
              <>
                <Link to="/login" className="btn btn-outline">Sign in</Link>
                <Link to="/register" className="btn btn-lime">Create account</Link>
              </>
            )}
          </div>
        </header>

        <div className="l-hero-body">
          <span className="eyebrow"><i />Simple HR for modern teams</span>
          <h1>HR that keeps up with <em>your people.</em></h1>
          <p className="lead">Attendance, leave, announcements and training in one calm workspace, with the right view for HR, managers and every employee.</p>
          <div className="actions">
            <Link to={cta} className="btn btn-lime btn-lg">{user ? "Go to my dashboard" : "Get started free"}</Link>
            {!user && <Link to="/login" className="btn btn-outline btn-lg">I have an account</Link>}
          </div>
        </div>

        <div className="fan" aria-hidden="true">
          <div className="fan-card c1"><small>Today, 9:12 AM</small><div className="fan-time">09:12</div><span className="pv-pill">Checked in</span></div>
          <div className="fan-card c2"><small>Leave request</small><strong>Sneha Kulkarni</strong><span>Sick leave, 2 days</span><span className="pv-pill soft">Pending</span></div>
          <div className="fan-card c3"><small>Announcement</small><strong>Quarterly town hall</strong><span>Posted by HR for everyone</span><span className="pv-pill soft">New</span></div>
        </div>
      </section>

      <section className="roles">
        <div className="r1"><span>For HR</span><h3>Records, attendance and company news.</h3><p>Keep employee records accurate, watch attendance across teams and publish updates.</p></div>
        <div className="r2"><span>For managers</span><h3>Your team, in one view.</h3><p>Review leave requests, plan training programs and see who is in today.</p></div>
        <div className="r3"><span>For employees</span><h3>Everything personal, simple.</h3><p>Check in, apply for leave, update your profile and stay on top of announcements.</p></div>
      </section>

      <section className="land-features">
        <h2>Everything you need, <em>nothing you don’t.</em></h2>
        <div className="feat-grid">
          {FEATURES.map(([n, t, d]) => (
            <div className="feat" key={n}><span className="feat-n">{n}</span><strong>{t}</strong><p>{d}</p></div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Ready to simplify your HR?</h2>
        <Link to={cta} className="btn btn-dark btn-lg">{user ? "Go to my dashboard" : "Create your account"}</Link>
      </section>

      <footer className="land-foot">StaffSync, a MERN stack human resource management system.</footer>
    </div>
  );
}
