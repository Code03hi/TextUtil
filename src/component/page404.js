import { Link } from "react-router-dom";

function Page404() {
    return (
        <>
            <div className="container">
                <h1>Page Not Found</h1>
                <p>Chances are you’ve landed on a 404 error page before. Whether you’ve arrived on a 404 error page because of a simple typo or because you were seeking a page that no longer exists, most people find being unable to find what they’re looking for to be a frustrating experience. A major part of running a successful website is staying alert for errors like broken pages or slow performance. However, sometimes there are problems you just can’t avoid, and 404 errors are among them. The good news? With a little ingenuity</p>
                <Link to="/">Go to home page</Link>
            </div>
        </>
    )
}

export default Page404;
