import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Scanner from "./Pages/Scanner/Scanner";

function App() {
	

	return (
		<div className="app">
			<Routes>
			<Route   exact
          path="/"
          element={<Scanner></Scanner>}>
        </Route>
			</Routes>
		</div>
	);
}

export default App;
