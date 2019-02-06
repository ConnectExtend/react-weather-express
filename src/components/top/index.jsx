import React from 'react';

import './styles.scss';

import Weather from './weather.jsx';

import { Manager, Reference, Popper } from 'react-popper';

export default class TopSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelectLocationOpen: false
        };
    }

    onToggleSelectLocation() {
        this.setState(prevState => ({
            isSelectLocationOpen: !prevState.isSelectLocationOpen
        }));
    }

    render() {
        const { isSelectLocationOpen } = this.state;
        
        return (
            <div className='top-content'>
                <h1 className='title'>Weather Express</h1>
                <Weather {...this.props} />
                <Manager>
                    <Reference>
                        {({ ref }) => (
                            <button className='btn-select-location' 
                            ref={ref}
                            onClick={this.onToggleSelectLocation.bind(this)}
                            >
                                Select Location
                            </button>
                        )}
                    </Reference>
                    <Popper placement="top">
                        {({ ref, style, placement, arrowProps }) => ( 
                            isSelectLocationOpen &&
                            <div ref={ref} style={style} data-placement={placement}>
                                Popper element
                            <div ref={arrowProps.ref} style={arrowProps.style} />
                            </div>
                        )}
                    </Popper>
                </Manager>
            </div>
        );
    }
}
