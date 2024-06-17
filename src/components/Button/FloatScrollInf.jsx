import "./FloatScrollInf.css";

function FloatScrollInf() {
  return (
    <>
      <div className="w-16 h-16 absolute bottom-32 left-1/2 transform -translate-x-1/2 mb-20 p-2 opacity-50">
        <div className="mouse "></div>
        <div className="arrow-scroll">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export { FloatScrollInf };
