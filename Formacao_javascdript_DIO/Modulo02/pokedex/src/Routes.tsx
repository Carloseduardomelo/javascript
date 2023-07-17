import React from 'react';;
import { BrowserRouter, Route } from "react-router-dom"
import App from './App';

interface RoutesProps {

}

const Routes: React.FC<RoutesProps> = () => {
    return (
        <>
            <BrowserRouter>
                <Route>
                    <Route path="/" element={<App/>} />
                    <Route path="/" />
                </Route>
            </BrowserRouter>
        </>
    );
}

export default Routes;