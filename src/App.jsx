import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Scanner from "./Pages/Scanner/Scanner";
import Login from "./Pages/Login/Login";

function App() {
	

	const Dashboard = () => (
		<div >
		{/*   <Navbar /> */}
		  <div >
			<Outlet />
		  </div>
		  
		</div>
	  )
	  const Auth = () => (
		<div>
		  <Outlet />
		</div>
	  )


	return (
		<div className="app">
			<Routes>
			<Route element={<Dashboard />}>
			<Route   exact
          path="/"
          element={
            localStorage.getItem('token') ? (
              <Scanner />
            ) : (
              <Navigate replace to="/login" />
            )
          }>
        </Route>

		</Route>
		<Route element={<Auth />}>
        <Route   exact
          path="/login"
          element={
              <Login/>
          }>
        </Route>
        </Route>
			</Routes>
		</div>
	);
}

export default App;
