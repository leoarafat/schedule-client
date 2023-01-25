const PricingModal = () => {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <img
            src="https://images.ctfassets.net/fzn2n1nzq965/6JEjxpwMd1OIIk6RosReNU/3d5c5f5217a7cce4af750ebfe599b6fc/Payments-social-card.png?q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default PricingModal;
