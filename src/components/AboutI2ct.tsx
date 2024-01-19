import React from "react";

const AboutI2ct = () => {
	return (
		<div className="flex h-[38rem] text-[#C4C1BB] w-full gap-10 justify-center ">
			<img
				src="aboutImg.jpg"
				alt="AboutImg"
				className="h-4/5 my-auto w-[30%]"
			/>
			<div className="w-2/5 my-auto flex flex-col gap-6">
				<p className="i2ctjourneybottomborder w-20 text-lg">About Us</p>
				<h2 className="text-4xl font-bold ">About I2CT</h2>
				<p className="">
					“The premier conference for the latest discoveries in
					Convergence in Technology” “Accepted papers will be
					submitted…
				</p>
				<p>Email Us : ieee_conference@i2ct.in </p>
				<p>Contact Us : +91- 7720032237 </p>
				<button className="bg-yellow-700 text-white font-semibold w-40 h-14 rounded-xl border-yellow-800 border-2 hover:bg-[#181A1B] hover:duration-300 after:duration-300 ">
					Read More
				</button>

				<div className=" w-full flex items-center justify-around">
					<div>
						<i className="text-[#ffd271]  text-6xl border-2 border-yellow-600 rounded-md p-4 fa-solid fa-phone-volume"></i>
						<p className="text-3xl font-bold text-center">350</p>
					</div>
					<div>
						<i className="text-[#ffd271]  text-6xl border-2 border-yellow-600 rounded-md p-4 fa-solid fa-phone-volume"></i>
						<p className="text-3xl font-bold text-center">10,527</p>
					</div>
					<div>
						<i className="text-[#ffd271]  text-6xl border-2 border-yellow-600 rounded-md p-4 fa-solid fa-phone-volume"></i>
						<p className="text-3xl font-bold text-center">1,877</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutI2ct;
