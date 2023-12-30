function SectionTitle({ text, align }) {
  return (
    // text-3xl font-medium tracking-wider capitalize
    <div className="border-b border-base-300 pb-5">
      <h3
        className={`font-title text-[clamp(1.5rem,3vw,2rem)] font-black leading-none capitalize ${align}`}
      >
        {text}
      </h3>
    </div>
  );
}

export default SectionTitle;
