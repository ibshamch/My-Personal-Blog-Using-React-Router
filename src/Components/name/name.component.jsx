const Name = ({name,NameComponent}) => {
  return (
    <div className={`name ${NameComponent}`}>
      <div>{`My Name is ${name}`}</div>
    </div>
  );
};

export default Name;
