import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TaskPage from "./pages/tasks";
import HelpPage from "./pages/help";
import LoginPage from "./pages/login";

//react-router v6での記述
const Router = () => {
    return (
        <BrowserRouter>
            <header className="global-head">
                <ul>
                    <li>
                        <Link to={`/`}>ホーム</Link>
                    </li>
                    <li>
                        <Link to={`/help`}>ヘルプ</Link>
                    </li>
                    <li>
                        <Link to={`/login`}>ログイン</Link>
                    </li>
                    <li>
                        <span>ログアウト</span>
                    </li>
                </ul>
            </header>

            <Routes>
                <Route path={`/`} element={<TaskPage />} />
                <Route path={`/help`} element={<HelpPage />} />
                <Route path={`/login`} element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;