import { BrowserRouter, Routes, Route } from "react-router-dom"
import TelaInicial from "../pages/telaInicial"
import { PageMatch } from "../pages/telaMacth"

export const Router = () => { 
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<TelaInicial/>}/>
                <Route  path="/matchPage/" element={<PageMatch/>}/>
            </Routes>
        </BrowserRouter>
    )
}