import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("tradeLockerToken");
      if (!token) {
        setError("No active session found. Please sign up or log in.");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`${API_URL}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(res.data);
        window.localStorage.setItem("tradeLockerUser", res.data.name);
      } catch (err) {
        setError(err?.response?.data?.message || "Unable to load profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="p-6">Loading profile...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-red-600">
        <h3 className="text-xl font-semibold">Profile unavailable</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Card className="rounded-3xl shadow-xl overflow-hidden">
        <CardContent>
          <Box className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <Box className="flex items-center gap-4">
              <Avatar className="bg-blue-600 text-white" sx={{ width: 72, height: 72 }}>
                {profile.name?.charAt(0).toUpperCase() || "U"}
              </Avatar>
              <div>
                <Typography variant="h5" component="div" gutterBottom>
                  {profile.name}
                </Typography>
                <Typography color="text.secondary">{profile.email}</Typography>
              </div>
            </Box>
            <Box className="rounded-3xl bg-blue-50 px-4 py-3 text-blue-700">
              <Typography variant="subtitle2" component="div">
                Active profile
              </Typography>
              <Typography variant="body2">Signed in successfully</Typography>
            </Box>
          </Box>

          <Grid container spacing={3} className="mt-6">
            <Grid item xs={12} md={4}>
              <Box className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <Typography variant="subtitle2" gutterBottom>
                  Account type
                </Typography>
                <Typography variant="h6">Equity + F&O</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <Typography variant="subtitle2" gutterBottom>
                  API status
                </Typography>
                <Typography variant="h6">Connected</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="rounded-3xl bg-slate-50 p-5 shadow-sm">
                <Typography variant="subtitle2" gutterBottom>
                  Profile loaded
                </Typography>
                <Typography variant="h6">Ready</Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
        <Typography variant="h6" gutterBottom>
          About your dashboard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This dashboard is connected to the backend and can render holdings,
          orders, positions, and funds data directly from the TradeLocker API.
        </Typography>
      </div>
    </div>
  );
};

export default Profile;
