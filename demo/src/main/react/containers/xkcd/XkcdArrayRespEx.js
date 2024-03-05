import React, {useState, useEffect} from 'react'
import Nav from '../../components/nav/Nav'
import axios from 'axios';


const XkcdArrayRespEx = () => {

    const mockResp = [
        {
            "month": "1",
            "num": 1,
            "link": "",
            "year": "2006",
            "news": "",
            "safe_title": "Barrel - Part 1",
            "transcript": "[[A boy sits in a barrel which is floating in an ocean.]] Boy: I wonder where I'll float next? [[The barrel drifts into the distance. Nothing else can be seen.]] {{Alt: Don't we all.}}",
            "alt": "Don't we all.",
            "img": "https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg",
            "title": "Barrel - Part 1",
            "day": "1"
        },
        {
            "month": "1",
            "num": 2,
            "link": "",
            "year": "2006",
            "news": "",
            "safe_title": "Petit Trees (sketch)",
            "transcript": "[[Two trees are growing on opposite sides of a sphere.]] {{Alt-title: 'Petit' being a reference to Le Petit Prince, which I only thought about halfway through the sketch}}",
            "alt": "'Petit' being a reference to Le Petit Prince, which I only thought about halfway through the sketch",
            "img": "https://imgs.xkcd.com/comics/tree_cropped_(1).jpg",
            "title": "Petit Trees (sketch)",
            "day": "1"
        },
    ]
    // make your API calls
    // Accept inputs
    // Handle single responses
    // returned arrays

    return(
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            { mockResp.map((xkcd, index) => {
                return(
                    <div className="card col" style={{"width": "18rem"}} key={index}>
                        <img src={xkcd.img} className="card-img-top" alt={xkcd.alt} />
                        <div className="card-body">
                            <h5 className="card-title">{xkcd.title}</h5>
                            <p className="card-text">{xkcd.transcript}</p>
                            <a href={xkcd.img} className="btn btn-primary">See Image</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
// map same functionality as forEach or a for loop
// map returns an array
export default XkcdArrayRespEx