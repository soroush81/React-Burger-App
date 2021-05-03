import React, { useState, useEffect } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary';
// import axios from 'axios';

const WithErrorHandler = (WrappedComponent, axios) => {

    const NewComponent = (props) => {
        const [error, setError] = useState(null);

        useEffect(() => {

            const req = axios.interceptors.request.use(config => {
                setError(null);
                return config;
            })

            const res = axios.interceptors.response.use(null, error => {
                setError(error);
                return Promise.reject(error);
            });
            // return () => {
            //     axios.interceptors.request.eject(req);
            //     axios.interceptors.response.eject(res);
            // };
        }, []);




        const errorConfirmedHandler = () => {
            setError(null);
        }

        return (
            <Auxiliary>
                <Modal
                    show={error}
                    ModalClosed={errorConfirmedHandler}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Auxiliary>
        );
    };
    return NewComponent;

};
export default WithErrorHandler;