"use client";
import React, { useState } from "react";

{
	/* <img
					src="cor2.png"
					alt="cor2"
					className="absolute w-full h-full "
				/> */
}
{
	/* <img
					src="cor3.jpg"
					alt="cor3"
					className="absolute w-full h-full"
				/> */
}

const HeroCorousel = () => {
	const [Cor, setCor] = useState(0);
	const [Src, setSrc] = useState("cor1.jpg");
	var arr: String[] = ["cor1.jpg", "cor2.png", "cor3.jpg"];
	setTimeout(() => {
		setCor((Cor + 1) % 3);
		// eslint-disable-next-line
		setSrc(arr[Cor]);
	}, 2000);
	return (
		<div>
			<div className="relative h-[35rem] w-full overflow-hidden">
				<img
					src={Src}
					alt="cor1"
					className="absolute opacity-30 w-full h-full "
				/>
				<div className="absolute z-10 w-full h-full flex flex-col items-center justify-evenly ">
					<h2 className="font-bold text-7xl w-3/4 text-center flex-wrap">
						IEEE 9th I2CT India, 05th-07th April 2024
					</h2>
					<p className=" w-3/4 text-center text-xl flex-wrap">
						One of the Most Premium Conference of Asia Pacific
						“Accepted papers will be submitted for inclusion…
					</p>
				</div>
			</div>
		</div>
	);
};

export default HeroCorousel;
