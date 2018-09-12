import React, { Component } from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import { logger } from './logger';

const animationContainer = ComponentToAnimate => class extends Component {
    static propTypes = {
        isMounted: PropTypes.bool.isRequired,
        delayTime: PropTypes.number.isRequired,
        poses: PropTypes.shape({
            preEnter: PropTypes.object.isRequired,
            enter: PropTypes.object.isRequired,
            exit: PropTypes.object.isRequired,
        }).isRequired,
    };

    static defaultProps = {
        delayTime: 600,
        poses: {
            preEnter: {
                y: 200,
                opacity: 0,
                transition: 600,
            },
            enter: {
                y: 0,
                opacity: 1,
                transition: 600,
            },
            exit: {
                y: -200,
                opacity: 0,
                transition: 600,
            },
        },
    };

    state = {
        shouldRender: this.props.isMounted,
        shouldAnimate: false,
    };

    componentDidMount() {
        const _TIMEOUT = 300;

        setTimeout(() => {
            this.setState({
                shouldAnimate: true,
            });
        }, _TIMEOUT);
    }

    componentDidUpdate(oldProps) {
        const { isMounted, delayTime } = this.props;
        if(oldProps.isMounted && !isMounted) {
            this.setState({
                shouldAnimate: false,
            });

            setTimeout(() => {
                this.setState({
                    shouldRender: false,
                });
            }, delayTime);

        } else if(!oldProps.isMounted && isMounted) {
            const _TIMEOUT = 300;

            this.setState({
                shouldRender: true,
            });

            setTimeout(() => {
                this.setState({
                    shouldAnimate: true,
                });
            }, _TIMEOUT);
        }
    }

    constructor(props) {
        super(props);

        this.AnimationWrapper = posed.div(this.remapPoses(this.props.poses));
    }

    getComponentName = (options = { debug: false }) => {
        const component = <ComponentToAnimate/>;
        const displayName = component.type.displayName.toLowerCase();
        const regex_compName = /connect\(|\)/gm;

        if(displayName.includes('connect')) {
            const result = displayName.replace(regex_compName, '');

            if(options.debug) {
                logger('==> animationContainer.js:96 |> getComponentName trimmed result :: ', 'INFO', result);
            }

            return result;
        } else {
            if(options.debug) {
                logger('==> animationContainer.js:102 |> getComponentName default result :: ', 'INFO', displayName);
            }

            return displayName;
        }

    };

    remapPoses = (poses, options = { debug: false }) => {
        let result = {};

        if(poses) {
            result = Object.keys(poses).map(pose => {
                if(pose !== 'initialPose') {
                    return { [ `${this.getComponentName()}${pose}` ]: poses[ pose ] };
                } else {
                    return { [ pose ]: `${this.getComponentName()}${poses[ pose ]}` };
                }
            });

            if(options.debug) {
                logger(`==> animationContainer.js:123 |> remapPoses for ${this.getComponentName()} :: `, 'INFO', result.reduce((a, b) => Object.assign({}, a, b)));
            }

            return result.reduce((a, b) => Object.assign({}, a, b));
        }
    };

    render() {
        const { AnimationWrapper, props: { isMounted } } = this;
        const { shouldAnimate } = this.state;
        const componentName = this.getComponentName();

        return this.state.shouldRender ?
            <AnimationWrapper
                className={ `animation-container animation-container--${componentName}` }
                pose={ shouldAnimate ? `${componentName}enter` : isMounted ? `${componentName}preEnter` : `${componentName}exit` }>
                <ComponentToAnimate { ...this.props } />
            </AnimationWrapper> : null;
    }
};

export default animationContainer;