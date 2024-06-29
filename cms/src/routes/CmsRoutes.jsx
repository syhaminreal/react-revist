import{BrowserRouter, Routes} from "react-router-dom"
import {Layout} from "../components"
import *as Pages from "../pages"


export const CmsRoutes =()  =>{
    return<BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index elmennt={<Pages.Dashboard />} />
            <Route index element={<Pages.Login />} />     
        </Route>
    </Routes>
    </BrowserRouter>
}