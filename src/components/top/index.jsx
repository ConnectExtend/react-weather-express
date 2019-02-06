import React from 'react';

import './styles.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Weather from './weather.jsx';

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
            <main className='top-content'>
                <section>
                    <h1 className='title'>Weather Express</h1>
                    <Weather {...this.props} />
                </section>
                <section>
                    <form class="InputAddOn" action="dummy_page.php">
                        <label for='location-search' class='InputAddOn-label' aria-label='Enter location information'>Enter city name, zip code or postal code.</label>
                        <div class='search-bar'>
                            <input id='location-search' class="InputAddOn-field" type='text'></input>
                            <button class="InputAddOn-icon" type='submit'>
                                <span class="search-icon">
                                    <FontAwesomeIcon icon={ faSearch } size="2x" />
                                </span>
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        );
    }
}
