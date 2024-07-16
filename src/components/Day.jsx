const Day = () => {
  const today = new Date();
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
    }).format(date);
  };
  return (
    <div>
      <h1
        style={{
          backgroundColor: "cyan",
        }}
      >
        Today is {formatDate(today)}
      </h1>
    </div>
  );
};

export default Day;
