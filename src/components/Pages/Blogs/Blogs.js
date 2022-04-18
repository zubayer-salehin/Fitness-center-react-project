import React from 'react';
import { Container } from 'react-bootstrap';
import "./Blogs.css";

const Blogs = () => {
    return (
        <Container>
            <div className='mt-4'>
                <h3>1. Difference between authorization and authentication?</h3>
                <p>Simply placed, authentication is the system of verifying who someone is, whereas authorization is the manner of verifying what precise programs, files, and data a consumer has get entry to to. The situation is like that of an airline that wishes to determine which human beings can come on board. The first step is to verify the identification of a passenger to make certain they're who they say they may be. Once a passenger’s identity has been decided, the second step is verifying any unique offerings the passenger has get admission to to, whether or not it’s flying high-quality or touring the VIP front room.</p>
                <h3>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>The Firebase Realtime Database lets you construct wealthy, collaborative programs through permitting cozy get right of entry to to the database immediately from client-facet code. Data is continued domestically, and even while offline, realtime events hold to fire, giving the give up consumer a responsive enjoy.Usually, authentication via a server entails using a person call and password. Other methods to authenticate may be thru cards, retina scans, voice reputation, and fingerprints.</p>
                <h3>3. What other services does firebase provide other than authentication?</h3>
                <p>Most apps want to recognise the identity of a consumer. Knowing a person's identity allows an app to soundly keep user facts inside the cloud and offer the equal personalised experience across all the consumer's devices.Helping you to construct apps fasterReleasing apps with confidence, performance, and stabilityIncreasing consumer engagement after freeing the appThe platform works well for cellular and internet packages.The middle functions of Firebase consist of NoSQL databases, real-time queries, scalable website hosting, file storage, REST APIs, authentication, and analytics.The foremost problems Firebase solves are permitting you to build apps quicker, transferring your awareness from infrastructure to developing more sturdy user experiences, and scaling programs with out coping with infrastructure. </p>
            </div>
        </Container>
    );
};

export default Blogs;