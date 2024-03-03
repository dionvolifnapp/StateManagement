import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav/Nav'
import axios from 'axios';

const AppContainer =(props) => {
    const [count2, setCount2] = useState(0);
    const [xkcdCurrent, setXkcdCurrent] = useState({});
    const [xkcdPast, setXkcdPast] = useState(null);
    const [userDefComicNum, setUserDefComicNum] = useState('')

    useEffect(()=> {
        axios.get('/xkcd/current')
          .then(function (response) {
            setXkcdCurrent(response.data)
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    },[])

    const fetchPastComic = (pastNum) => {
        const defaultNum =  xkcdCurrent.num ? xkcdCurrent.num : 2500;
        const count = pastNum || userDefComicNum ? pastNum || userDefComicNum : Math.floor(Math.random() * defaultNum);
        axios.get(`/xkcd/past/${count}`)
          .then(function (response) {
            setXkcdPast(response.data)
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })A
    }

    return(
    <>
       <Nav />
       <h1>Hello, world!</h1>
       <img src={xkcdCurrent.img} alt={xkcdCurrent.alt ? xkcdCurrent.alt : "No Xkcd image for today"} />
       <div className="mb-3">
           <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
           <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
       </div>
       <div className="mb-3">
           <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
           <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
       </div>
       { xkcdPast &&
            <img src={xkcdPast.img} alt={xkcdPast.alt ? xkcdPast.alt : "No Xkcd image for today"} />
       }

       <div>
            <button type="button" className="btn" onClick={() => fetchPastComic()}>Get Random Comic!!!</button>
       </div>
       <div>

            <input type="text" value={userDefComicNum} onChange={(e) => setUserDefComicNum(e.target.value)} placeholder="Enter in desired comic number"/>
            <button disabled={userDefComicNum ? false : true} type="button" className="btn" onClick={() => fetchPastComic(userDefComicNum)}>Get Random Comic</button>
 //           <button disabled={userDefComicNum ? false : true} type="button" className="btn" onClick={() => fetchPastComic()}>Get Random Comic Without passing state data</button>

       </div>
   </>
   )
}

export default AppContainer