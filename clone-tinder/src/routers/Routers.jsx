import { BrowserRouter, Routes, Route } from "react-router-dom"
import TelaInicial from "../pages/telaInicial"


function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<TelaInicial />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Routers;
