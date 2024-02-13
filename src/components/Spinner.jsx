const Spinner = () => {
    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="spinner" />
        <p className="mt-2 text-sm">Loading...</p>
      </div>
    );
  };
  
  export default Spinner;
  