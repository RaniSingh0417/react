const Heading = () => {
  let name = "Rani";
  let cuurentTime = new Date().toString();

  return (
    <>
      <h1 className="style">
        This is Heading {name} {cuurentTime}
      </h1>
    </>
  );
};
export default Heading;
