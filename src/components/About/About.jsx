import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React Routers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        React Router is a popular routing library for React applications that allows you to handle navigation and routing declaratively within your application. It enables you to create single-page applications by managing different views or components based on the URL, without requiring a full page refresh.
                        </p>
                        <p className="mt-4 text-gray-600">
                       <br/>

                            BrowserRouter: This is one of the router components provided by React Router. It uses HTML5 history API to keep UI in sync with the URL.  <br/>

                            Route: Route is a declarative way to render different components based on the URL path.. <br/>

                            Link: The Link component is used to create hyperlinks within your application.  <br/>

                            Switch: Switch is used to exclusively render the first matching Route. <br/>

                            Params: React Router allows defining dynamic routes using placeholders, called URL parameters or route parameters.  <br/>

                           
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}