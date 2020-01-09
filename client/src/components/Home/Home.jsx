import React, {useState}from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import LoginForm from '../../components/Home/LoginForm';
import UserDashboard from '../../components/Home/UserDashboard';
import "./Home.css";
import Footer from "./Footer"


const Home = props => {
    const[withoutCode, setWithoutCode]=useState(false);
    const[logged,setLogged]=useState(false)

    const loginHandler = ()=>{
        setLogged(!logged);
    }

    return (
        <div className="Home">
            
            <LoginForm />
            <Footer />

            {/*<Button onClick={()=>loginHandler()}>LOG</Button>
            logged===false ? <><p>not logged</p><LoginForm/></>:
            <><p>logged</p><UserDashboard/></>*/}
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;