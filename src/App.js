// App.js
import React, { Component } from 'react';
import { getFirestore, updateDoc, doc, increment } from "firebase/firestore";
import { app } from "./Firebase";
import './App.css';
// import fg from './fg.jpg';
import cal from './Calvin.png';
import ani from './Anishka.png';
import ary from './Aryan.jpeg';
import kri from './Kritika.png';
import moh from './Mohanty.png';
import pun from './Punit.png';
import raj from './Rajani.png';
import rish from './Rishi.png';
import Card from './Card';
import { ToastContainer } from 'react-toastify';

// Initialize Firestore
const db = getFirestore(app);

export default class App extends Component {
  state = {
    count: 0,
    reset: true,
  };

  // Function to update candidate votes in Firestore
  updateCandidateVotes = async (category, candidate) => {
    try {
      // Construct the document path dynamically
      const docRef = doc(db, `candidates/vote/${category}/${candidate}`);
      // Increment the vote count by 1
      await updateDoc(docRef, {
        Votes: increment(1),
      });
      console.log(`Vote updated for ${candidate} in ${category}`);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  // Handle button clicks in the Card component
  handleCardButtonClick = () => {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
        reset: true,
      }),
      this.checkCount
    );
  };

  // Check the count and reset after reaching a certain threshold
  checkCount = () => {
    if (this.state.count >= 4) {
      setTimeout(() => {
        this.setState({
          count: 0,
          reset: false,
        });
      }, 10000);
    }
  };

  render() {
    const { count, reset } = this.state;

    return (
      <div className='App'>
       <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <p className='header'>✨VOTING SYSTEM✨</p>
        
          <div className='row'>
            <Card
              count={count}
              reset={reset}
              onButtonClick={this.handleCardButtonClick}
              name1="A S Calvin"
              name2="Singh Rishiraj"
              category="Head-Boy(Assistant)"
              onVote={this.updateCandidateVotes}
              image1={cal}
              image2={rish}
            />
            <Card
              count={count}
              reset={reset}
              onButtonClick={this.handleCardButtonClick}
              name1="Sharma Rajani"
              name2="Mishra Anshika"
              category="Head-Girl(Assistant)"
              onVote={this.updateCandidateVotes} // Add this line
              image1={raj}
              image2={ani}
             
            />
            <Card
              count={count}
              reset={reset}
              onButtonClick={this.handleCardButtonClick}
              name1="Vaishnav Punit"
              name2="Patel Aryan"
              category="Sports-Captain(Boy)"
              onVote={this.updateCandidateVotes}
              image1={pun}
              image2={ary}
              
              
              
              />


              <Card
              count={count}
              reset={reset}
              onButtonClick={this.handleCardButtonClick}
              name1="Dubey Kritika"
              name2="Mohanty Jyoti"
              category="Sports-Captain(Girl)"
              onVote={this.updateCandidateVotes}
              image1={kri}
              image2={moh}
              
              
              
              />

              
          </div>
        
      </div>
    );
  }
}
