import './App.css'
import { Header } from './components/Header'
import { FeatureCard } from './components/FeatureCard'
import { ProfileCard } from './components/ProfileCard'

import bannerImage from "./assets/bannerImage.jpeg"
import first from "./assets/first.svg"
import second from "./assets/second.svg"
import third from "./assets/third.svg"
import fourth from "./assets/fourth.svg"
import fifth from "./assets/fifth.svg"  
import github from "./assets/github.svg"
import slack from "./assets/slack.svg"
import gitlab from "./assets/gitlab.svg"
import mountain from "./assets/mountain.jpg"
import commandMenuGif from "./assets/command-menu.gif"
import stammy from "./assets/@Stammy.jpg"
import xavi from "./assets/@xavimb.jpg"
import taylor from "./assets/@taylorcara_.jpg"
import getLinearEarlyAccessBanner from "./assets/getLinearEarlyAccessBanner.png"

function App() {
  return (
    <div className='appContainer'>
      <Header />

      <main>
        <div className='introduction'>
          <div className='introductionText'>
            <span className='linearText'>
              INTRODUCTION LINEAR
            </span>
            <h1 className='titleText'>The issue tracking tool you'll be enjoy using</h1>
            <p className='description'>
              Linear lets you manage software development and tack bugs. 
              Linear's streamlined design is built for speed and efficiency - helping high performing teams accomplish great things.
            </p>
          </div>
          

          <div className='inputWrapper'>
            <input type="text" placeholder='> enter your email'/>
            <button>
              Request access
            </button>
          </div>

          <div className="bannerImageWrapper">
            <img src={bannerImage} alt="banner" />
          </div>
        </div>


        <div className='mainFeatures'>
          <div className='introductionMainfeatures'>
            <p className='highlightenedText'>
              Main Features
            </p>
            <h2 className='titleMainFeatures'>Issue Tracking optimized for speed</h2>
            <p className='description'>With Linear, we are creating an issue tracker with an unrivalled user experience. Linear is optimized for speed, 
              efficiency and performance. Its realtime sync architecture makes it blazingly fast. Its minimalistic, purposeful design help your team achieve more.
            </p>
          </div>

          <div className='resumeFeatures'>
            <FeatureCard 
              icon={third}
              title='Built for speed' 
              description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quod adipisci, consequatur eveniet?'
            />
            <FeatureCard 
              icon={first}
              title='Use keyboard for everything'
              description='Architecto ipsa eveniet nostrum est? Laboriosam dolores doloribus dolor, nobis eius quis sunt consequatur eveniet?'
            />
            <FeatureCard 
              icon={second}
              title="List and Board" 
              description='Architecto ipsa eveniet nostrum est? Laboriosam dolores doloribus dolor, nobis eius quis sunt consequatur eveniet?'
            />
            <FeatureCard 
              icon={third} 
              title="Desktop app and offline support" 
              description='Architecto ipsa eveniet nostrum est? Laboriosam dolores doloribus dolor, nobis eius quis sunt consequatur eveniet?'
            />
            <FeatureCard 
              icon={fifth}
              title="Multiple Teams" 
              description='Architecto ipsa eveniet nostrum est? Laboriosam dolores doloribus dolor, nobis eius quis sunt consequatur eveniet?'
            />
            <FeatureCard 
              icon={fourth} 
              title="Dark mode" 
              description='Architecto ipsa eveniet nostrum est? Laboriosam dolores doloribus dolor, nobis eius quis sunt consequatur eveniet?'
            />
          </div>
        </div>


        <div>
          <div className='introductionMainfeatures'>
            <p className='highlightenedText'>
              Feature spotlight
            </p>
            <h2 className='titleMainFeatures'>
              Meet your command line
            </h2>
            <p className='description'>
              Hit to bring up the context-sensitive command menu. Edit an issue's status, change assignees, modify subscription and a lot more in mere seconds.
            </p>
          </div>


          <div className="meetCommandLineImageWrapper">
            <img src={commandMenuGif} alt="" className='commandGif'/>
            <img src={mountain} alt='mountainImage'/>
          </div>
        </div>

        <div className='integrations'>
          <div className='introductionMainfeatures'>
            <p className='highlightenedText'>
              Integrations
            </p>
            <h2 className='titleMainFeatures'>
              Built for your workflow
            </h2>
            <p className='description'>
              To help improve your personal and your team's productivity. Linear ties into your existing tools, services and workflow.
            </p>
          </div>

          <div className='resumeFeatures'>
            <FeatureCard 
              icon={github} 
              title="Dark mode" 
              description='Architecto ipsa eveniet nostrum est? Laboriosam dolores doloribus dolor, nobis eius quis sunt consequatur eveniet?'
            />
            <FeatureCard 
              icon={slack} 
              title="Dark mode" 
              description='Architecto ipsa eveniet nostrum est? Laboriosam dolores doloribus dolor, nobis eius quis sunt consequatur eveniet?'
            />
            <FeatureCard 
              icon={gitlab} 
              title="Dark mode" 
              description='Architecto ipsa eveniet nostrum est? Laboriosam dolores doloribus dolor, nobis eius quis sunt consequatur eveniet?'
            />
          </div>

          <p className='moreIntegrations'>More integrations coming soon...</p>
        </div>


        <div className='about'>
          <div className='introductionMainfeatures'>
            <p className='highlightenedText'>
              About us
            </p>
            <h2 className='titleMainFeatures'>
              The Linear team
            </h2>
            <p className='description'>
              Hit to bring up the context-sensitive command menu. 
              Edit an issue's status, change assignees, modify subscription and a lot 
              more in mere seconds.
            </p>
          </div>
          
          <div className='aboutLinks'>
              <a href="#">Twitter</a>
              <a href="#">Email</a>
          </div>

          <div className='aboutProfiles'>
              <ProfileCard 
                img={stammy}
                title='Stammy'
                description='Architecto ipsa eveniet nostrum est? Laboriosam dolores doloribus dolor, nobis eius quis sunt consequatur eveniet?'
              />
              <ProfileCard 
                img={xavi}
                title='Xavi'
                description='Architecto ipsa eveniet nostrum est? Laboriosam dolores doloribus dolor, nobis eius quis sunt consequatur eveniet?'
              />
              <ProfileCard 
                img={taylor}
                title='Taylor'
                description='Architecto ipsa eveniet nostrum est? Laboriosam dolores doloribus dolor, nobis eius quis sunt consequatur eveniet?'
              />
          </div>
        </div>


        <div className='getLinearEarlyAccess'>
          <div className='titleGetLinearEarlyAccess'>
            <h2>Get Linear Early Access</h2>
            <p>We're gradually opening up early access to companies and teams.</p>
          </div>
          
          <div className='inputWrapperSmaller'>
            <input type="text" placeholder='> enter your email'/>
            <button>
              Request access
            </button>
          </div>

          <img src={getLinearEarlyAccessBanner} alt="" />
        </div>
      </main>
     
     <footer>
        <p>Linear Orbit, Inc. - San Francisco, CA</p>
        <div className='footerActions'>
          <a href="#">Twitter</a>
          <a href="#">Download</a>
          <a href="#">Privacy</a>
          <a href="#">Terms of Service</a>
        </div>
     </footer>
    </div>
  )
}

export default App
