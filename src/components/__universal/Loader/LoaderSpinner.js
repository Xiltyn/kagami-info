// @flow

import React from 'react';
import './LoaderSpinner.scss';

type LoaderSpinnerProps = {
    /** Additional inline styles object for parsing dynamic styles */
    style:Object,
    /** Height of the spinner in pixels */
    height:number,
    /** Width of the spinner in pixels */
    width:number,
};

/**
 * Global loading spinner component. Can be used in any container and will position itself in the middle of its parent.
 */
const LoaderSpinner = (props:LoaderSpinnerProps) => (
    <div className="loader-spinner">
        <svg viewBox="0 0 120 32" width={ props.width } height={ props.height } style={ props.style }>
            <circle cx={ 16 } cy={ 16 } r={ 14 } />
        </svg>
    </div>
);

LoaderSpinner.defaultProps = {
    height: 24,
    width: 120,
    style: {},
};

export default LoaderSpinner;
