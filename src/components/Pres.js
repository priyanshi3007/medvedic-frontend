import {useState} from 'react'
import { useSelector } from "react-redux"

export default function Pres() {
	// {Name,Email,Mobile,Age,Dob,Height,Weight,Result}
	// const [data,setData]=useState([]);

	const data=useSelector((state) => state.Render.Render);
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = currentDate.getMonth() + 1;
	const day = currentDate.getDate();
	const formattedDate = `${year}-${month}-${day}`;
	return (
		<div className="prescription2">
			<div className="top2">
				<h2 className="text-center">Prescription</h2>
			</div>
			<div className="container2">
				<div className="row">
					<div className="col-6">Name of the Patient: </div>
					<div className="col-6">{data.Name}</div>
				</div>
				<div className="row">
					<div className="col-3">Date of Birth: </div>
					<div className="col-3">{data.Dob}</div>
					<div className="col-3">Age: </div>
					<div className="col-3">{data.Age}</div>
				</div>
				<div className="row">
					<div className="col-6">Contact Number: </div>
					<div className="col-6">{data.Mobile}</div>
				</div>
				<div className="row">
					<div className="col-6">Today's Date: </div>
					<div className="col-6">{formattedDate}</div>
				</div>
				<div className="row">
					<div className="col-6">Diagnosed with: </div>
					<div className="col-6">{data.mname}</div>
				</div>
				<div className="row">
					<div className="col-4">Ayurvedic Medicine</div>
					<div className="col-4">Dosage (per day)</div>
					<div className="col-4">Home Remedy</div>
				</div>
				<div className="row">
					<div className="col-4">{data.Result.MedicineName}</div>
					<div className="col-4">{data.Result.Dosage}</div>
					<div className="col-4">{data.Result.HomeRemedies}</div>
				</div>
				<div className="row">
					<div className="col-4"></div>
					<div className="col-4"></div>
					<div className="col-4"></div>
				</div>
				<div className="row">
					<div className="col-4"></div>
					<div className="col-4"></div>
					<div className="col-4"></div>
				</div>
				<div className="row">
					<div className="col-6">Diet Chart: </div>
					<div className="col-6">{data.Result.DietChart}</div>
				</div>
				<div className="row">
					<div className="col-6">Yoga: </div>
					<div className="col-6">{data.Result.YogaNames}</div>
				</div>
			</div>
		</div>
	)
}
