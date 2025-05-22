import { Route, Routes } from "react-router";
import MainLayout from "./components/layout/MainLayout";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<div>Home</div>} />
            </Route>
        </Routes>
    );
}

export default App;
