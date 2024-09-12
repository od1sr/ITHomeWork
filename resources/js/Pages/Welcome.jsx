import { useState } from 'react';
import { Link } from '@inertiajs/react';    
import Layout from '../Layouts/Basic.jsx';

export default function Welcome(props){

    console.log(props);
    

    return (
        <Layout>
            <h1>Учи уроки, дэбил</h1>
        </Layout>
    );
}