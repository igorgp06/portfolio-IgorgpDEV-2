
export const NotFound = () => {
    return (
        <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-2">404 - Not Found</h1>
            <p className="mb-2">The page you are looking for does not exist.</p>
            <p className="mb-2">Please check the URL or return to the homepage.</p>
            <a className="text-primary underline hover:text-secondary text-2xl" href="https://igdeveloper.com.br">Home Page</a>
        </div>
    )
}

export default NotFound