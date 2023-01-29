import { BrowserRouter, Routes, Route } from "react-router-dom"
import TelaInicial from "../pages/telaInicial"

export const Router = () => { 
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<TelaInicial/>}/>
            </Routes>
        </BrowserRouter>
    )
}