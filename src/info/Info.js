import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import uimock1 from "../img/wenite-mockup.png"
/*
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
*/
import resume1 from "../img/resume1.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,128,255)", "rgb(175,0,0)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Daijon",
    lastName: "Bereola-Carson",
    initials: "dbc", // the example uses first and last, but feel free to use three or more if you like.
    position: "Let's work!",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: "📧",
            text: "daijonbereola@gmail.com",
            link: "mailto:daijonbereola@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/daijonbereola",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/daijon-bereola-carson/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hi! I'm Daijon. I studied Computer Science at Howard University, I'm passionate about music and tech, and I believe that technology makes the world go round. Let's connect!",
    skills:
        {
            proficientWith: ['reactjs', 'react native', 'python', 'git', 'github', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'bootstrap', 'java', 'c++']
        }
    ,
    hobbies: [
        {
            label: 'photography',
            link: 'https://www.instagram.com/justdayshots/',
            emoji: '📸'
        },
        {
            label: 'music',
            link: 'https://linktr.ee/daylists',
            emoji: '🎹'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [
        {
            apps: [
                {
                    title: "Portfolio",
                    live: "https://daijonbereola.github.io/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
                    source: "https://github.com/daijonbereola/ReactPortfolioTemplate", // this should be a link to the **repository** of the project, where the code is hosted.
                    image: mock1
                },
                    
                {
                    title: "To-Do App",
                    live: "https://daijonbereola.github.io/react-todo-app/",
                    source: "https://github.com/daijonbereola/react-todo-app",
                    image: mock2
                },
                {
                    title: "BLM+",                        live: "https://blue-movement.github.io/team1_2020/about",
                    source: "https://github.com/Blue-movement/team1_2020",
                    image: mock3
                },
                /*
                {
                    title: "Project 4",
                    live: "https://paytonpierce.dev",
                        source: "https://github.com/paytonjewell",
                    image: mock4
                },
                {
                    title: "Project 5",
                    live: "https://paytonpierce.dev",
                    source: "https://github.com/paytonjewell",
                    image: mock5
                }
                */
            ],
            ui: [
                {
                    title: "WENITE",
                    link: "https://www.figma.com/file/iXRzMFzITeFFHDioWYK32z/WENITE-Prototype?type=design&node-id=0%3A1&mode=design&t=QniPHOliuXdw3Fuw-1",
                    image: uimock1
                },
            ],
        }
    ],
    resume:[
        {
            title: "2023 Resume",
            link: "https://docs.google.com/document/d/1boLk35uLE5JU-QR14fr20dzKmlrzSXdgiQBqxvxru0w/edit?usp=sharing",
            image: resume1
        }
    ]
}