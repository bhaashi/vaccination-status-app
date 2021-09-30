import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import EditVaccinationDetails from "./components/EditVaccineDetails";
import ViewVaccineDetails from "./components/ViewVaccineDetails";

const App = () => {
    return(
        <Router>
        <main className='py-3'>
        <Route path='/' component={ViewVaccineDetails} exact/>
        <Route path='/city/:id/edit' component={EditVaccinationDetails} />
        </main>
        </Router>
    );
}

export default App;