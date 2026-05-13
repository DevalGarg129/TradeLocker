import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";
const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState({
    message: "",
    type: "info",
    loading: false,
  });

  const handleLogin = async () => {
    if (!user.email || !user.password) {
      setStatus({
        message: "Please enter both email and password.",
        type: "danger",
        loading: false,
      });
      return;
    }

    setStatus({ message: "Logging in...", type: "info", loading: true });

    try {
      const res = await axios.post(`${API_URL}/login`, user);
      const token = res.data.token;
      const redirectUrl = `${DASHBOARD_URL}/?token=${encodeURIComponent(token)}`;
      window.location.href = redirectUrl;
    } catch (err) {
      const message = err?.response?.data?.message || "Unable to login. Please check your credentials.";
      setStatus({ message, type: "danger", loading: false });
    }
  };

  return (
    <section className="login-page py-5 bg-light">
      <div className="container">
        <div className="row g-4 justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="card auth-card shadow-sm border-0 h-100">
              <div className="card-body p-5">
                <span className="badge bg-success mb-3">Welcome back</span>
                <h1 className="mb-4">Access your account</h1>
                <p className="text-muted mb-4">
                  Continue your trading journey with secure login and access to your portfolio.
                </p>
                <ul className="feature-list ps-3 mb-0">
                  <li>Secure login with JWT authentication</li>
                  <li>Access your holdings and positions</li>
                  <li>View order history and performance</li>
                  <li>Manage your investment portfolio</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card auth-card shadow-sm border-0">
              <div className="card-body p-5">
                <h2 className="mb-4">Login</h2>

                {status.message && (
                  <div className={`alert alert-${status.type}`} role="alert">
                    {status.message}
                  </div>
                )}

                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-success w-100 fw-semibold"
                  onClick={handleLogin}
                  disabled={status.loading}
                >
                  {status.loading ? "Logging in..." : "Login"}
                </button>

                <p className="text-center text-muted mt-4 mb-0">
                  Don't have an account? <Link to="/signup" className="text-primary">Sign up here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;