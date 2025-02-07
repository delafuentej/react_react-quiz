import Loader from './Loader';

const SpinnerLoader = () => {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <Loader />
      </div>
    );
  };
  
  export default SpinnerLoader;