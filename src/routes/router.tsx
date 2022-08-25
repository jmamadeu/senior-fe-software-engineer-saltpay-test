import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryPage from "../pages/country/country";
import HomePage from "../pages/home/home";

export const Router = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryName" element={<CountryPage />} />
      </Routes>
    </BrowserRouter>
  )
}