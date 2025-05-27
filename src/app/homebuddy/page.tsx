'use client';

import './page.css';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default function Homebuddy() {

  return (
    <div className="homebuddyContainer">
      <Nav />
      <div className="homebuddyContent">
        <div className="homebuddyTitle">
          <h1>homebuddy</h1>
          <p>making off-campus housing search stress-free</p>
        </div>
        <div className="homebuddyIntro">
          <img src="/homebuddy/homebuddy-intro.jpg" alt="Homebuddy: Making the off-campus search better" />
          <div className="introText">
            <p>
              <strong>Overview: </strong>One of the problems that Cornell students face is the task of finding off-campus housing. Students often to consider a variety of aspects, including but not limited to: location, price, and amenities. There are various complaints about the process being stressful, confusing, and not centralized. How can we design a centralized product that lessens the burden, makes the platform more user-friendly, and the process stress-free?
            </p>
            <p className="introBlurbText">
              We first collaborated to deliver a deck proposal with medium-fidelity diagrams for an off-campus housing app product. Later, I made revisions to the medium-fidelity diagrams to create a final prototype of the product.
            </p>
          </div>
        </div>

        <div className="researchSection">
          <h3>Housing? A Stressful Conversation</h3>
          <p>
            At Cornell, it is a known fact that every fall, in August or September, the task of finding off-campus housing preoccupies a majority of the student body. Whether it be lining up in front of rental offices or chasing down landlords, Cornell students have voiced their complaints and frustrations with regards to finding off-campus housing options.
          </p>
          <h4>Problem Space</h4>
          <p>
            From talking to users who experienced the hunt for off-campus housing, we found some key insights:
          </p>
          <ul>
            <li>users cannot find a comprehensive platform that lists all the off-campus housing options</li>
            <li>it is difficult for users to coordinate correspondence with landlords via email and phone</li>
            <li>the process from looking at options to signing the lease is long and tedious</li>
          </ul>

          <h4>Target Audience</h4>
          <p>When exploring what subset of the Cornell population is considering off-campus housing, we found 3 general groups:</p>
          <ul>
            <li>sophomores - because of convenience and greater flexibility in meal plans and options</li>
            <li>juniors/seniors - because of unguaranteed on-campus housing options</li>
            <li>graduate students - different consumer segment, accomodations differ in terms of location, pricing, distance, etc.</li>
          </ul>
          <p>Thus, we decided to focus on undergraduate students as our main target audience.</p>

          <h4>Market Analysis</h4>
          <p>What is the market size?</p>
          <ul>
            <li>Total undergraduate enrollment: 15,182 students</li>
            <li>Total sophomores, juniors, seniors = 15,182 - 3,325 = 11,857 students</li>
          </ul>
          <p>Taking into account that not all sophomores, juniors, and seniors live off campus, we can estimate the market size to be around ~9,500 students. </p>

          <h4>Competitors</h4>
          <p>We found some existing websites included: Cornell Off-Campus Living and College Pads</p>
          <img src="/homebuddy/competitors.png" alt="Competitors diagram for market research"/>
        </div>

        <div className="researchSection">
          <h3>How to Alleviate Stress?</h3>
          <h4>Brainstorming</h4>
          <p>
            Based on the prior research and the user interviews we conducted, we decided to categorize the findings via affinity diagrams.
          </p>
          <img src="/homebuddy/affinitydiagrams.png" alt="Affinity diagram from our user interviews and research"/>
          <p>
            After categorizing these findings, we decided to sketch some possible ideas and designs for the new product. Below are some of the low-fidelity sketches that I drew:
          </p>
          <img src="/homebuddy/sketches.png" alt="Sketches of our ideas and designs for the product"/>

          <h4>Choosing an idea</h4>
          <p>From all of our sketches, we decided to pursue a Tinder-inspired app product to address our problem space.</p>
          <p className="mt3">This app will:</p>
          <ul>
            <li>contain relevant information that most of the users found necessarily for off-campus housing, including: location, distance, cost, amenities</li>
            <li>show user housing based on preferences</li>
            <li>enable users to "swipe" on housing they like and be matched with landlords/rental companies</li>
            <li>provide users with a "favorites" list to document their favorite listings</li>
          </ul>
          <p className="mt3">Why Did We Choose This?</p>
          <ul>
            <li>this solution will make the act of searching for off-campus housing less stressful and more interactive</li>
            <li>there is a comprehensive list of housing available that fulfill the users’ preferences addresses user pain points</li>
            <li>it has a high value and low cost. This app solves our problem statement through the creation of a centralized product</li>
          </ul>
          <h4>Medium Fidelity Flow</h4>
          <p>After coming up with a solution, our group decided to create a medium-fidelity sketch to get a general visual of how the app will work.</p>
          <img src="/homebuddy/med-fi.png" alt="Medium fidelity sketches for our solution"/>
        </div>

        <div className="researchSection">
          <h3>Swipe Right or Left on the App Idea?</h3>
          <h4>Formative Usability Testing and Summative Tests</h4>
          <p>Using these low fidelity sketches, we conducted usability testing and summative tests to gain user feedback. Some of the metrics that we measured include: </p>
          <ul>
            <li>Time Spent: how long it took to complete task</li>
            <li>Success Rate: how well task was completed</li>
          </ul>
          <p className="mt3">Some of the overall takeaways/findings:</p>
          <ul>
            <li>User would appreciate a screen with instructions explaining how the app works</li>
            <li>User needed prompting getting started and clarity about the “favs” page and how to get to “preference”</li>
          </ul>
        </div>

        <div className="researchSection">
          <h3>Adding a Splash of Sophistication</h3>
          <p>In the weeks after the course ended, I decided to make further revisions on our medium-fidelity flow to create a final prototype for our product. Taking the user feedback and general visual design principles, I generated a high-fidelity flow for the product. Below is an overview of the final product:</p>
          <img src="/homebuddy/overview.png" alt="High fidelity diagram overview of Homebuddy"/>
        </div>

        <div className="videoSection">
          <div className="finalFlow">
            <div className="videoPlay">
              <video autoPlay muted loop>
                <source src="/homebuddy/gettingstarted.mov" aria-label="Getting started flow, where users can create a new profile" type="video/mp4"/>
              </video>
            </div>
            <div className="textDescription">
              <h4>01. Creating a Profile</h4>
              <p>When users first get started, they can create a new profile that includes pertinent information for housing, including price range, distance to campus, number of rooms, and amenities. </p>
            </div>
          </div>

        <div className="finalFlow">
          <div className="videoPlay">
              <video autoPlay muted loop>
                <source src="/homebuddy/swiping.mov" type="video/mp4"/>
              </video>
          </div>
          <div className="textDescription">
            <h4>02. Get Swiping</h4>
            <p>After users input their preferences, the listings will be filtered based on the preferences. Swipe right to save the listing to the favorited list, swipe left to move on to the next listing. Similarly, the user can click on the ✖️ or ❤. </p>
          </div>
        </div>

        <div className="finalFlow">
          <div className="videoPlay">
            <video autoPlay muted loop>
                <source src="/homebuddy/contacting.mov" type="video/mp4"/>
                <p>Your browser doesn't support HTML5 video.</p>
            </video>
          </div>
          <div className="textDescription">
            <h4>03. Contacting Listings</h4>
            <p>The user can contact landlords and rental companies via the "messages" tab in the right hand corner; this "messages" tab includes all the listings that the user favorited.</p>
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
