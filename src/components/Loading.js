const Suspense = () => (
  <div className="d-flex justify-content-center align-items-center">
    <div className="spinner-grow bg-light mt-5" role="status">
      <span className="visually-hidden sr-only">Loading...</span>
    </div>
  </div>
);

export default Suspense;
