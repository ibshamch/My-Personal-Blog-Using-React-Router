const Contact = ({ contact, contactClass }) => {
  return (
    <div className={`contact ${contactClass}`}>
      <div>{`My Contact num is ${contact}`}</div>
    </div>
  );
};

export default Contact;
