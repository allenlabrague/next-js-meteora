import React from "react";

const DetailsList = ({ list }) => {
  return (
    <div className="flex items-start justify-center gap-8 md:gap-20 flex-wrap">
      {list.map((e) => (
        <div key={e.title}>
          <h2 className="text-base text-gray-500 uppercase">{e.title}</h2>
          <p className="text-base">{e.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailsList;
