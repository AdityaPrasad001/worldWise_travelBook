import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Pricing from "./pages/pricing/Pricing";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import AppLayout from "./pages/applayout/AppLayout";
import { useEffect } from "react";
import CitiesList from "./components/city/CityList";
import City from "./components/city/City";
import CountryList from "./components/country/CountryList";
import Form from "./components/form/Form";
import PageNotFound from "./pages/PageNotFound";
import { CitiesProvider } from "./context/CitiesContext";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route path="cities" element={<CitiesList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
