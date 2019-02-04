import React from 'react';

import './styles.scss';

import Weather from './weather.jsx';

import { Manager, Reference, Popper } from 'react-popper';

export default class TopSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='top-content'>
                <div className='title'>Weather Express</div>
                <Weather {...this.props} /><Manager>
                    <Reference>
                    {({ ref }) => (
                        <button className='btn-select-location'>Select Location</button>
                    )}
                    </Reference>
                    <Popper placement="top">
                        {({ ref, style, placement, arrowProps }) => (
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
