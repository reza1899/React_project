const ErrorBoundary = ({error}) => {
    return (
        <>
            <div role="alert">
                <p className="text-white">Something went wrong:</p>
                <pre style={{ color: "red" }}>{error.message}</pre>
            </div>
        </>
    )
}
export default ErrorBoundary;