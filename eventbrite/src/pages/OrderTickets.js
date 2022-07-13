import React from "react";

const OrderTickets = () => {
  return (
    <>
      <div className="order-tickets__event-hour-date">
        <h3>Late Night 2022</h3>
        <p>Event details</p>
      </div>
      <div className="order-tickets__ticket-type">
        <h3>Wave 1: Early Bird</h3>
        <p>Ticket Price: €15</p>
      </div>
      <div className="order-tickets__card-and-order">
        <p>Card Icon</p>
        <p>Order Button</p>
      </div>
    </>
  );
};

export default OrderTickets;
