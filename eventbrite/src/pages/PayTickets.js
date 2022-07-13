const PayTickets = () => {
  return (
    <>
      <form>
        <h3>Contactgegevens</h3>
        <div className="form-details">
          <label>First Name</label>
          <input type="text" />
        </div>
        <div className="form-details">
          <label>Last Name</label>
          <input type="text" />
        </div>
        <div className="form-details">
          <label>Email</label>
          <input type="email" />
        </div>
        <button>Bestellen Button</button>
      </form>
    </>
  );
};

export default PayTickets;
