import React from 'react';
import Appnavbar from "./components/AppNavbar/Appnavbar";
import Mainbody from "./components/Mainbody/Mainbody";
import { connect } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import LoadingOverlay from 'react-loading-overlay';

function App(props) {
  const {loading} = props;
  return (
    <LoadingOverlay active={loading}
    styles={{ overlay: (base) => ({...base, background: 'none', top:"-5%", zIndex: 3000}) }}
    spinner={ <Loader type="Oval" color="#3F51B5"
    height={150} width={150} /> }
    >
    <div style={{backgroundColor: "lightgrey", minHeight: "100vh"  ,height: "100%"}}>
      <Appnavbar/>
      <Mainbody/>
    </div>
    </LoadingOverlay>
  );
}

const mapStateToProps = state => {
  return {
      loading: state.weather.loading,
  };
}

export default connect(mapStateToProps)(App);
