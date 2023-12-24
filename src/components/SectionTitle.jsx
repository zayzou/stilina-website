import React from "react";

function SectionTitle({ text }) {
  return (
    <div className="border-b border-base-300 pb-5">
      <h3 className="text-3xl font-medium tracking-wider capitalize">{text}</h3>
    </div>
  );
}

export default SectionTitle;
