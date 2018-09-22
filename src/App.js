import React, { Component } from 'react';
import SocialMediaContainer from './containers/SocialMediaContainer/SocialMediaContainer'
import InputField from './components/InputField/InputField'

class App extends Component {
  // componentDidMount() {
  //   let myUrl = 'https://bestdogmemes.tumblr.com/';
  //   const oReq = new XMLHttpRequest();

  //   oReq.addEventListener("load", function () {
  //     console.log(this.status);
  //   });
  //   oReq.open("GET", myUrl);
  //   oReq.send();
  // }



  state = {
    username: '',

    // usernameAvailability: {
    //   github: {
    //     // exmple https://github.com/aparkinbotswana
    //     url: 'https://github.com/',
    //     availability: false
    //     // getting Access-Control-Allow-Origin
    //     // bogus request returns 404. successful returns 200
    //   },
    //   instagram: {
    //     // example https://www.instagram.com/carmen.samdiego/ NOTE!!! the forward slash at the end seems to be part of many user account. typing the web address without the slash will result in a redirect to the same address with the slash at the end and a 301 status code
    //     url: 'https://www.instagram.com/',
    //     availability: false
    //     // not get any Access-Control-Allow-Origin
    //     // bogus request brings back 404. successful request gives 200
    //   },
    //   tumblr: {
    //     // example http://bestdogmemes.tumblr.com/
    //     // example https://bestdogmemes.tumblr.com/

    //     // figure out best way to handle http and https. hold an additional key with both in an array? I dunno. maybe check for one and the redirect code of the other? 
    //     // Give this some thought. Don't want to include too many special case handles for each social app. Want to try keep it all in on function
    //     url: '.tumblr.com',
    //     availability: false
    //     // getting Access-Control-Allow-Origin
    //     // bogus page returns 404. successful returns 200. seems there are both http and https pages. also, https redirect gives 302 before redirecting to http, whereas http gives 307 before redirecting to http pages. may need to account for this in code.
    //   },
    //   twitter: {
    //     //example https://twitter.com/whatisavariable
    //     url: 'https://twitter.com/',
    //     availability: false
    //     // getting Access-Control-Allow-Origin
    //     // bogus page returns 404. successful returns 200. http to https redirects also give a 307 code. This may not be an issue though, it seems all twitter pages are https.
    //   }
    // }
  }

  usernameInput = (event) => {
    let username = this.username
    this.setState({ username: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Username Checker</h1>
        <InputField changed={(event) => this.usernameInput(event)}/>        
        <SocialMediaContainer username={this.state.username}/>
      </div>
    )
  }
}

export default App