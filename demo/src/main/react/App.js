import React from "react";
import ReactDom from "react-dom/client";
import AppContainer from "./containers/AppContainer";
import XkcdCurrentContainer from "./containers/xkcd/XkcdCurrentContainer";
import XkcdPastContainer from "./containers/xkcd/XkcdPastContainer";
import XkcdArrayRespEx from "./containers/xkcd/XkcdArrayRespEx";
import NasaApodPage from "./containers/NasaApodPage";
import NasaApodPageCurrent from "./containers/NasaApodPageCurrent"; // Import the NasaApodPageCurrent component
import WeatherDashboard from "./containers/WeatherDashboard"; // Import the WeatherDashboard component
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppContainer />,
        children: [
            {
                index: true,
                element: <div> Empty Index </div>
            },
            {
                path: "currentxkcdcomic",
                element: <XkcdCurrentContainer />
            },
            {
                path: "pastxkcdcomic",
                element: <XkcdPastContainer />
            },
            {
                path: "example",
                element: <XkcdArrayRespEx />
            },
            {
                path: "nasa-apod",
                element: <NasaApodPage />
            },
            {
                path: "nasa-apod2",
                element: <NasaApodPageCurrent />
            },
        ]
    }
]);

const root = ReactDom.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);











