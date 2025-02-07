const CustomButton = ({ children, handleClick, className = "", disabled = false }) => {
    return (
        <button 
            className={`${className}`} 
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default CustomButton;