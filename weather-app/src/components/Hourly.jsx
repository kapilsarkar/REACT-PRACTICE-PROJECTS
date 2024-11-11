/* eslint-disable react/prop-types */
const Hourly = (props) => {
  const { dayOne } = props;
  const { time,feelslike_c } = dayOne;
  return (
    <>
    <div className="each-day">
      <p>{time.slice(10)}</p>
      <img src={dayOne?.condition?.icon} />
      <p>{dayOne?.condition?.text}</p>
      <p>{feelslike_c}℃</p>
    </div>
    </>
    
  );
};

export default Hourly;
