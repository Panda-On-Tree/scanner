import './Scanner.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Scanner() {
	/* 
  useLayoutEffect(()=>{
	const myInput = document.getElementById("myTextField");
	myInput.addEventListener(
	  "keyup",
	  debounce( helloWorld, 1000 )
	  );
  document.getElementById("myTextField").focus();

  },[]) */

	useEffect(() => {
		document.getElementById("myTextField1").focus();
		document.getElementById("myTextField2").addEventListener("keydown", debounce(helloWorld2, 200));
		const myInput = document.getElementById("myTextField1");

		myInput.addEventListener("keydown", debounce(helloWorld, 200));
	}, []);

	const [data, setData] = useState("");
	const [data2, setData2] = useState("");

	function sendData() {
		const senddata = {
			code1: data,
			code2: data2,
		};

		axios({
			method: "post",
			url: `https://internal.microtek.tech:8443/v1/api/mhere/upload-barcode-master`,
			headers: {
				"Content-Type": "application/json",
			},
			data: senddata,
		})
			.then((res) => {
				console.log(res);
				toast.success(res.data.message);
				document.getElementById("myTextField1").focus();
				setData("");
				setData2("");
			})
			.catch((err) => {
				console.log(err);
				toast.error(err.response.data.message);
			});
	}

	function debounce(callback, delay) {
		let timeout;
		return function () {
			clearTimeout(timeout);
			timeout = setTimeout(callback, delay);
		};
	}

	function helloWorld() {
		document.getElementById("myTextField2").focus();
		// console.log("KEY UP")
	}
	function helloWorld2() {
		//console.log(data,data2);
		//alert(JSON.stringify(data))
		//document.getElementById("myTextField2").focus();
		//console.log("KEY UP")
	}

	window.addEventListener("input", (e) => {
		console.log(e);
	});

	return (
		<div className="app">
			{[...Array(1)].map((_, i) => {
				return (
					<div key={i} className="app-inner">
						{/* <p>1</p> */}
						<div className="scan-input-main">
                        <input
							value={data}
							className="scan-input"
							id={`myTextField${i + 1}`}
							type="text"
							onChange={(e) => {
								setData(e.target.value);
							}}
						/>
						<input
							value={data2}
							className="scan-input"
							id={`myTextField${i + 2}`}
							type="text"
							onChange={(e) => {
								setData2(e.target.value);
							}}
						/>
                        </div>
						<div className="scan-input-send-button-main">
                        <button 
							onClick={() => {
								sendData();
							}}
							className="scan-input-send-button">
							Send
						</button>
						<button
							onClick={() => {
								document.getElementById("myTextField1").focus();
							}}
							className="scan-input-reset-button">
							Reset
						</button>
                        </div>
					</div>
				);
			})}
			<ToastContainer position="top-right" autoClose={2000} hideProgressBar={true} closeOnClick pauseOnHover draggable theme="colored" />
		</div>
	);
}

export default Scanner;
