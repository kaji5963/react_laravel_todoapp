import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { BrowserRouter, Route, Routes, RouteProps } from "react-router-dom";
import TaskPage from "./pages/tasks";
import HelpPage from "./pages/help";
import LoginPage from "./pages/login";
import NotFoundPage from "./pages/error";
import { useLogout, useUser } from "./queries/AuthQuery";
import { useAuth } from "./hooks/AuthContext";

const Router = () => {
    const logout = useLogout();
    const { isAuth, setIsAuth } = useAuth();
    const { isLoading, data: authUser } = useUser();

    useEffect(() => {
        if (authUser) {
            setIsAuth(true);
        }
    }, [authUser]);

    const navigation = (
        <header className="global-head">
            <ul>
                <li>
                    <Link to={`/`}>ホーム</Link>
                </li>
                <li>
                    <Link to={`/help`}>ヘルプ</Link>
                </li>
                <li onClick={() => logout.mutate()}>
                    <span>ログアウト</span>
                </li>
            </ul>
        </header>
    );

    const loginNavigation = (
        <header className="global-head">
            <ul>
                <li>
                    <Link to={`/help`}>ヘルプ</Link>
                </li>
                <li>
                    <Link to={`/login`}>ログイン</Link>
                </li>
            </ul>
        </header>
    );

    if (isLoading) return <div className="loader"></div>

    return (
        //react-router v6での記述
        <BrowserRouter>
            {isAuth ? navigation : loginNavigation}

            <Routes>
                <Route path={`/`} element={isAuth ? <TaskPage /> : <Navigate to="/login" replace />} />
                <Route path={`/help`} element={<HelpPage />} />
                <Route path={`/login`} element={isAuth ? <Navigate to="/" replace /> : <LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
