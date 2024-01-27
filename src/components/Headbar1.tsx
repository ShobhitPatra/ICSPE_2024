import { icon } from "@fortawesome/fontawesome-svg-core";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Headbar1 = () => {
  return (
    <div className="w-full h-[110px]  text-[#cacaca] font-medium flex justify-center items-center border-b-[0.05px] border-[#4e4e4e]">
      <div className="bg-[#8A5E00] flex justify-end   h-full w-1/3">
        <div className="text-[#ebeaea]">
          <div className=" text-4xl font-bold pr-6 text-end">
            IEEE ICSPE 2024
          </div>
          <div className="w-[90%]">Technical Co-Sponsor: IEEE OPJU Section</div>
        </div>
      </div>
      <div id="triangle" className="self-end"></div>

      <div className="flex w-2/3 gap-8 justify-center">
        {/* <div className="flex gap-2">
					<div className="flex items-center rounded-full  border-2 border-[#8A5E00] h-10 w-10 justify-center mr-0">
						<i className="text-[#ffd271]  fa-solid fa-phone-volume"></i>
					</div>
					<div>
						<div>Phone Number</div>
						<div>+91-8999689262</div>
					</div>
				</div>
				<div className="flex gap-2">
					<div className="flex items-center rounded-full  border-2 border-[#8A5E00] h-10 w-10 justify-center mr-0">
						<i className="text-[#ffd271]  fa-solid fa-location-dot"></i>
					</div>
					<div>
						<div>Contact Address</div>
						<div>I2CT Conference Secretary</div>
					</div>
				</div>
				<div className="flex gap-2">
					<div className="flex items-center rounded-full  border-2 border-[#8A5E00] h-10 w-10 justify-center mr-0">
						<i className="text-[#ffd271]  fa-regular fa-envelope"></i>
					</div>
					<div>
						<div>Email Address</div>
						<div>ieee_conference@i2ct.in</div>
					</div>
				</div> */}
      </div>
    </div>
  );
};

export default Headbar1;
