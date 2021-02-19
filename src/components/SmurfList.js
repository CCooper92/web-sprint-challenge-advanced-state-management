import React from 'react';
import Smurf from './Smurf';
// import getSmurf from './../actions/index';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from './../actions/index'

 const SmurfList = (props)=> {
     const { smurfs, isLoading, addSmurf, error } = props;

    // const isLoading = false;
    const testSmurf =  [
        {
          id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
          name:'Poppa Smurf',
          position:'Village Leader',
          nickname: 'Pops',
          description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
        },
        {
          id:"JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZ",
          name:'Smurfette',
          position:'Beautician',
          nickname: 'Smurfette',
          description: 'Smurfette\'s role in the village is that of any other smurf; chores, and helping out where she can, but for her specifically, she is often seen to be very active in organizing events.'
        }
      ];

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
       { testSmurf.map(smurf => {
            return(<Smurf smurf={smurf} />)
        })}
        
    </div>);
}
const mapStateToProps = state => {
    return{
    smurfs: state.smurfs,
    isLoading: state.isLoading
    
    }
};
export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.