const ErrorFallbackComponent:React.FC<any> = ({ error  }) => {
    return (
      <div>
        <h1>An error occurred: {error.message}</h1>
      </div>
    );
  };

export default ErrorFallbackComponent;