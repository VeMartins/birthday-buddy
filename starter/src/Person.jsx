const Person = ({ name, age, image, birthDay, birthMonth }) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
        <p
          style={{ fontSize: "X-small", marginTop: "3PX" }}
        >{`DOB: ${birthDay} of ${birthMonth}`}</p>
      </div>
    </article>
  );
};
export default Person;
