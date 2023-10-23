import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
    {
        path: "",
        element: lazy(() => import(".././Page/index")),
        nested: [
            { path: "", element: lazy(() => import(".././Page/HomePage/index")) },
            { path: "khao-sat", element: lazy(() => import(".././Page/KhaoSat/khao_sat")) },
        ]
    }

    // {
    //     path: "admin",
    //     element: lazy(() => import("../page/AdminTemplate")),
    //     nested: [
    //         { path: "dashboard", element: lazy(() => import("../page/AdminTemplate/DashBoard")) },
    //     ],
    // },
    // { path: "auth", element: lazy(() => import("../page/AdminTemplate/AuthPage")) },
];

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                >
                    {route.nested.map((item) => {
                        return (
                            <Route
                                key={item.path}
                                path={item.path}
                                element={<item.element />}
                            />
                        )
                    })}
                </Route>
            )
        } else {
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                />
            )
        }
    })
};



export default renderRoutes;