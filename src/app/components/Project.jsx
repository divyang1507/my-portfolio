import React from "react";

const Project = () => {
  return (
    <div className="bg-blackshade p-8 rounded-xl flex-1">
      <div className="w-fill h-[350px] bg-white rounded-lg">hello</div>
      <div>
        <div className="flex items-center justify-between pt-4">
          <h4> LLMWare.ai</h4>
          <div className="border-blackshade4 text-sm font-extrathin bg-blackshade3 border-[1px] px-1 py-[0.5px] rounded-sm">Website</div>
        </div>
        <div className="pt-2">
       <div className="text-sm text-blackshade4"> Made using </div>
          <div>Framer</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
