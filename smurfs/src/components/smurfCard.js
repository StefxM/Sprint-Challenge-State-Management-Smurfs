import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {getSmurf} from '../actions/index';

const SmurfCard = ({getSmurf, smurf, isFetching, error}) => {
    useEffect(() => {
        getSmurf();
    }, [getSmurf]);


    return (
        
        <div>
            {isFetching && (<div>is loading</div>)}
        <div>
            {smurf.map(smid => {
                return(
                    <div key={smid.id}>
                        <p>name:{smid.name}</p>
                        <p>age:{smid.age}</p>
                        <p>height:{smid.height}</p>
                    </div>   
                )
            })}
        </div>
        </div>
    )
}



const mapStateToProps = state => {
    console.log("smurfs from call", state.smurf);
    return {
        smurf: state.smurf,
        isFetching:state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getSmurf})(SmurfCard);