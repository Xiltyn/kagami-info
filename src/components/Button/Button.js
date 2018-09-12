/*================================================
 = Made with <3 by Kagami | jakub.bujko@kagami.info
 = -----  kagami-info  -----
 =   > $file.filename
 =   > created @ 9/12/18 2:19 AM
 ===============================================*/

// @flow

import * as React from 'react';
import LoaderSpinner from '../Loader/LoaderSpinner';

import './Button.scss';

type ButtonProps = {
    /** Button text copy */
    label:string,
    /** Button type */
    type:'primary'|'secondary'|'cta'|'warning'|'confirmation',
    /** Callback which fires when the button is clicked */
    onClick:() => void,
    /** Sets button styles to an alternative version */
    isAlt?:boolean,
    /** If isLoading is TRUE, Button's copy will change to loader */
    isLoading?:boolean,
    /** Optional props object passed to LoaderSpinner Component */
    loaderProps?:Object,
}

/** Reusable Button component including multiple types of styling */
const Button = (props:ButtonProps) => {
    const {
        label,
        onClick,
        isLoading,
        type,
        isAlt,
        loaderProps,
    } = props;

    // TODO: Add styling for types :: CTA | WARNING | CONFIRMATION
    // TODO: Add styling for ALTs

    return (
        <div
            onClick={ onClick }
            className="btn-container"
            style={ isLoading ? { pointerEvents: 'none' } : {} }>
            <button className={ `btn btn${type ? '-' + type : ''}${isAlt ? '--alt' : ''}` }>
                { !isLoading ? label : <LoaderSpinner { ...loaderProps } /> }
            </button>
        </div>
    );
};

export default Button;
