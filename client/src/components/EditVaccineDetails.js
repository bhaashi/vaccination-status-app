import React, {useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux'
import { fetchCity,updateCity } from '../actions/vaccines'

const EditVaccinationDetails = ({ match, history }) => {
  const cityId = match.params.id
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCity(cityId));
},[dispatch,cityId]);

const cityDetails = useSelector((state) => state.cityDetails)
const { loading,city } = cityDetails;
  
  
  const initialValues = {
      name: '',
      population: '',
      vaccinated: '',
      dosesAvailable: '',
  };

  const validationSchema = Yup.object().shape({
      name: Yup.string()
          .required('City is required'),
      population: Yup.string()
          .required('Population is required'),
      vaccinated: Yup.string()
          .required('Vaccinated is required'),
      dosesAvailable: Yup.string()
          .required('Doses Available is required'),
  });

  function onSubmit(fields, { setStatus, setSubmitting }) {
      setStatus();
      dispatch(updateCity(cityId, fields))
      
  }


    return(
        <>
            <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting, setFieldValue }) => {
              
               
              //get from city and set to form
              const fields = ['name', 'population', 'vaccinated', 'dosesAvailable'];
              fields.forEach(field => setFieldValue(field, city[field], false));
               

                return (
                    <Form>
                        <h1>Edit</h1>
                        <div className="form-row">
                            <div className="form-group col-5">
                                <label>City</label>
                                <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                <ErrorMessage name="name" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-2">
                                <label>Population</label>
                                <Field name="population" type="text" className={'form-control' + (errors.population && touched.population ? ' is-invalid' : '')} />
                                <ErrorMessage name="population" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-2">
                                <label>Vaccinated</label>
                                <Field name="vaccinated" type="text" className={'form-control' + (errors.vaccinated && touched.vaccinated ? ' is-invalid' : '')} />
                                <ErrorMessage name="vaccinated" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-2">
                                <label>Doses Available</label>
                                <Field name="dosesAvailable" type="text" className={'form-control' + (errors.dosesAvailable && touched.dosesAvailable ? ' is-invalid' : '')} />
                                <ErrorMessage name="dosesAvailable" component="div" className="invalid-feedback" />
                            </div>
                          </div>
                        
                        <div className="form-group">
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                Save
                            </button>
                        </div>
                    </Form>
                );
            }}
        </Formik>
        </>
    )
}

export default EditVaccinationDetails;
