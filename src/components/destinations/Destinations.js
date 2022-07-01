import React from 'react'
import './DestinationsStyles.css'
// div, container (h1, p, image container)
// The grid-template-columns CSS property 
// defines the line names and track sizing functions of the grid columns.
// The grid-column CSS shorthand property specifies a grid item's size and location
// The grid-row CSS shorthand property specifies a grid item's size and location
// grid column specifies how much space take in column. (width)
// grid-row specifies how much space take in row. (height)

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import KeyWest from '../../assets/keywest.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>All-Inclusive Resorts</h1>
                <p>On the Caribbean's Best Beaches</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={BoraBora} alt="/"/>
                    <img src={BoraBora2} alt="/"/>
                    <img src={Maldives} alt="/"/>
                    <img src={Maldives2} alt="/"/>
                    <img src={KeyWest} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations
