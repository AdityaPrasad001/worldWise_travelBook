
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Citylist from "./components/city/CityList";
import CountryList from "./components/countries/CountryList";
import City from "./components/city/City";
import Form from "./components/form/form";
import { CitiesProvider } from "./contexts/CitiesContext";
import { BASE_URL } from "./helper/helper";



function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            {/* <Route
            index
            element={<Citylist cities={cities} isLoading={isLoading} />}
          /> */}
            <Route index element={<Navigate replace to="cities" />} />
            <Route
              path="cities"
              element={<Citylist />}
            />
            <Route path="cities/:id" element={<City />} />
            <Route
              path="countries"
              element={<CountryList />}
            />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
