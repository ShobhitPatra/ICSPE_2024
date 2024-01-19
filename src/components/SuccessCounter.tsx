import React from "react";

const SuccessCounter = () => {
	return (
		<div className="flex flex-col bg-[#181A1B] py-6 items-center gap-4">
			<div className="i2ctjourneybottomborder mt-4 pb-2 text-4xl font-bold">
				Success Counter I2CT
			</div>
			{/* <hr className="w-52 h-[10px] text-yellow-900 bg-yellow-600" /> */}
			<div className="pb-3 w-2/3 text-center">
				We expect to welcome more than 1000 people from different
				regions of countries to our city for an event focused on
				different areas of research.
			</div>
			<div className=" w-[60%] flex items-center justify-around">
				<div>
					<i className="text-[#ffd271]  text-6xl border-2 border-yellow-600 rounded-md p-4 fa-solid fa-phone-volume"></i>
					<p className="text-3xl font-bold text-center">67</p>
				</div>
				<div>
					<i className="text-[#ffd271]  text-6xl border-2 border-yellow-600 rounded-md p-4 fa-solid fa-phone-volume"></i>
					<p className="text-3xl font-bold text-center">1,877</p>
				</div>
				<div>
					<i className="text-[#ffd271]  text-6xl border-2 border-yellow-600 rounded-md p-4 fa-solid fa-phone-volume"></i>
					<p className="text-3xl font-bold text-center">10,527</p>
				</div>
				<div>
					<i className="text-[#ffd271]  text-6xl border-2 border-yellow-600 rounded-md p-4 fa-solid fa-phone-volume"></i>
					<p className="text-3xl font-bold text-center">350</p>
				</div>
			</div>
		</div>
	);
};

export default SuccessCounter;
