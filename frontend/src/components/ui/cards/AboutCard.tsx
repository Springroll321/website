import {Card} from "./SimpleCard";
import Carousel from "../Carousel";

import about1 from '../../../assets/about/uofm.jpg';
import about2 from '../../../assets/about/manila.jpg';
import about3 from '../../../assets/about/winter.jpg';
const aboutImages = [ about1, about2, about3 ];

import exploring1 from '../../../assets/about/interests/banff.jpg';
import exploring2 from '../../../assets/about/interests/church.jpg';
import exploring3 from '../../../assets/about/interests/bridge.jpg';
import exploring4 from '../../../assets/about/interests/msc.jpg';
import exploring5 from '../../../assets/about/interests/para.jpg';
import exploring6 from '../../../assets/about/interests/pyramid.jpg';
const exploringImages = [ exploring1, exploring2, exploring3, exploring4, exploring5, exploring6 ];

import maker1 from '../../../assets/about/interests/crochet.jpg';
import maker2 from '../../../assets/about/interests/sword.jpg';
import maker3 from '../../../assets/about/interests/flower.jpg';
const makerImages = [ maker1, maker2, maker3 ];

import sport1 from '../../../assets/about/interests/drose.jpg';
import sport2 from '../../../assets/about/interests/lakers.jpg';
import sport3 from '../../../assets/about/interests/swimming.jpg';

const sportsImages = [ sport1, sport2, sport3 ];

import gaming1 from '../../../assets/about/interests/pc.jpg';
import gaming2 from '../../../assets/about/interests/omen.jpg';
import gaming3 from '../../../assets/about/interests/rellana.jpeg';

const gamingImages = [ gaming1, gaming2, gaming3 ];

const textClass = "text-2xl/10 text-yellow-950 w-7/8 pl-4";
const containerClass = "flex items-center justify-center pb-16";

const sizeClass = "min-w-[30vw] h-[50vh]";


function AboutCard() {
  return (
    <div id="aboutMe">
      <Card backgroundClassName="bg-orange-100/75 hover:bg-orange-100">
        <Card.Header className="text-6xl font-bold text-yellow-950 p-4 flex justify-center" >
          About Me
        </Card.Header>
        <Card.Body className="text-2xl/10 text-yellow-950 p-6 space-y-4">
        {/* MAKER SECTION */}
          <div className="flex items-center justify-center space-x-64">
          <p className={textClass}>I'm Patrick, a recently graduated student with a passion for creating new things, whether it's a project that is tangible or written in code.
            I enjoy solving complex problems and the process of bringing ideas to life. I graduated in 2025 with a major in Computer Science from the University of Manitoba.
            I was born and raised in the tropical weather of the Philippines and later moved to Winnipeg, Manitoba in 2009 with my family.
            Altough we have been in Canada for quite some time now, we're still learning how to survive the cold winters.
          </p>
          <Carousel
            images={aboutImages} 
            autoPlayInterval={3500} 
            sizeClass={sizeClass}
            showButtons={false} 
            showIndicators={false} 
          />
          </div>

        
        <h1 className="text-5xl font-bold text-yellow-950 p-4 flex justify-center pt-32">
            Interests
        </h1>
        
        {/* MAKER SECTION */}
          <div className={containerClass}>
            <div>
              <h2 className="text-3xl font-bold text-yellow-950 p-4 flex">
                Maker 🔨
              </h2>
              <p className={textClass}>
              I am passionate about making  things either through traditional crafts like woodworking and crocheting, or through digital creations such as 3D modeling and coding.
              I enjoy the mix of creativity, problem-solving, and experimentation that comes with any project.
              </p>
            </div>
            <Carousel 
              images={makerImages} 
              autoPlayInterval={4000} 
              sizeClass={sizeClass}
              showButtons={false} 
              showIndicators={false} 
            />
          </div>

          {/* GAMING SECTION */}
          <div className={containerClass}>
            <div>
              <h2 className="text-3xl font-bold text-yellow-950 p-4 flex">
                Gaming 🎮
              </h2>
              <p className={textClass}>
                Ever since I built my first computer, gaming has been one of my favorite ways to unwind during my free time. I mostly enjoy playing games with friends in competitive settings like NBA 2K, Valorant, and CSGO. The single player games that I have enjoyed are Soulsborne games like Dark Souls, Elden Ring and Sekiro.
              </p>
            </div>
            <Carousel 
              images={gamingImages} 
              autoPlayInterval={3500} 
              sizeClass={sizeClass}
              showButtons={false} 
              showIndicators={false} 
            />
          </div>

          {/* SPORTS SECTION */}
          <div className={containerClass}>
            <div>
              <h2 className="text-3xl font-bold text-yellow-950 p-4 flex">
                Sports 🏀
              </h2>
              <p className={textClass}>
                I’m adament about staying active — whether it's playing basketball, hiking, or swimming. I've been playing basketball ever since I was a kid and it remains one of my favorite ways to stay active and have fun with friends. My favourite NBA teams to watch are currently the Los Angeles Lakers and previously the Chicago Bulls during the Derrick Rose era. 
              </p>
            </div>
            <Carousel 
              images={sportsImages} 
              autoPlayInterval={3000} 
              sizeClass={sizeClass}
              showButtons={false} 
              showIndicators={false} 
            />
          </div>

          {/* EXPLORING SECTION */}
          <div className={containerClass}>
            <div>
              <h2 className="text-3xl font-bold text-yellow-950 p-4 flex">
                Exploring 🏞️
              </h2>
              <p className={textClass}>
                I love exploring new places, whether it's hiking through nature trails, visiting historical sites, or discovering hidden gems in cities.
                Exploring allows me to experience different cultures, appreciate the beauty of the world, and create lasting memories. I had the privelage to travel to various places including Canada, the Philippines, the United States, Mexico, and the Carribean.  
              </p>
            </div>
            <Carousel 
              images={exploringImages} 
              autoPlayInterval={3000} 
              sizeClass={sizeClass}
              showButtons={false} 
              showIndicators={false} 
            />
          </div>
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutCard;
