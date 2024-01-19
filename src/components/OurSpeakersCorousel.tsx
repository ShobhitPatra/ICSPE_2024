import React from "react";

const OurSpeakersCorousel = () => {
	return (
		<div className="flex flex-col bg-[#050505]  py-6 items-center gap-4">
			<div className="i2ctjourneybottomborder mt-4 pb-2 text-4xl font-bold">
				Our Speaker / Guest of 8th I2CT
			</div>
			<div className="pb-3 w-2/3 text-center">
				Internationally recognized keynote speakers & Eminent
				personalities
			</div>
			<div className=" w-[70%] flex items-center justify-around gap-4">
				<div className="flex w-1/3 flex-col items-center">
					<img
						src="speaker1.jpg"
						alt="Img"
						className="w-8/12 border-4 my-8 rounded-full border-yellow-600 "
					/>
					<p className="text-center text-lg">
						Adviser & Head, International Bilateral Cooperation
						Division Department of Science & Technology,Govt of
						India
					</p>
					<h2 className="text-center text-lg font-bold pt-4">
						Mr Sanjeev Kumar Varshney
					</h2>
					<p className="text-[#ffc547]">Head IBCDST</p>
				</div>
				<div className="flex w-1/3 flex-col items-center">
					<img
						src="speaker1.jpg"
						alt="Img"
						className="w-8/12 border-4 my-8 rounded-full border-yellow-600 "
					/>
					<p className="text-center text-lg">
						Adviser & Head, International Bilateral Cooperation
						Division Department of Science & Technology,Govt of
						India
					</p>
					<h2 className="text-center text-lg font-bold pt-4">
						Mr Sanjeev Kumar Varshney
					</h2>
					<p className="text-[#ffc547]">Head IBCDST</p>
				</div>
				<div className="flex w-1/3 flex-col items-center">
					<img
						src="speaker1.jpg"
						alt="Img"
						className="w-8/12 border-4 my-8 rounded-full border-yellow-600 "
					/>
					<p className="text-center text-lg">
						Adviser & Head, International Bilateral Cooperation
						Division Department of Science & Technology,Govt of
						India
					</p>
					<h2 className="text-center text-lg font-bold pt-4">
						Mr Sanjeev Kumar Varshney
					</h2>
					<p className="text-[#ffc547]">Head IBCDST</p>
				</div>
			</div>
		</div>
	);
};

export default OurSpeakersCorousel;
