function Card({ ...props }) {
  const {
    imgSrc,
    userType,
    planPrice,
    storage,
    options,
    speed,
    defaultButtonStyle,
    defaultCardStyle,
  } = props;
  return (
    <div
      className={`w-full shadow-xl flex flex-col my-4 py-4 rounded-lg hover:scale-105 duration-300 ${defaultCardStyle}`}
    >
      <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={imgSrc} alt="/" />
      <h2 className="text-2xl font-bold text-center py-8">{userType}</h2>
      <p className="text-center text-4xl font-bold">{planPrice}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{storage} Storage</p>
        <p className="py-2 border-b mx-8">{options}</p>
        <p className="py-2 border-b mx-8"> Send up to {speed} GB</p>
      </div>
      <button
        className={`bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ${defaultButtonStyle}`}
      >
        Start Trial
      </button>
    </div>
  );
}

export default Card;
