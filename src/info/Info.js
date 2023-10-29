import self from "../img/self.jpg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"



export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName:"Ethem",
    lastName: "Kucuk",
    initials: "JS", 
    position: "İbrahim Ethem Kucuk | Junior Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        
        {
            emoji: "📧",
            text: "ethemk10k@gmail.com"
        }
    ],
    socials: [
        
        {
            link: "https://github.com/ethemkucuk",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/ibrahim-ethem-k%C3%BC%C3%A7%C3%BCk-a2696b201/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        


    ],
    bio: "Hello! I'm Ethem. I'm a systems Junior Frontend Developer. I studied Yıldız Technical University, I enjoy coding and learning. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'c#']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },


    ],
    portfolio: [ 
        {
            title: "Content Master",
            source: "https://github.com/ethemkucuk/Content-Master", 
            image: mock1
        },
        {
            title: "To Do List",
            source: "https://github.com/ethemkucuk/to-do_list",
            image: mock2
        },
        {
            title: "Restaurant",
            source: "https://github.com/ethemkucuk/Reastaurant-Website",
            image: mock3
        },
        {
            title: "WeatherWise",
            source: "https://github.com/ethemkucuk/WeatherWise",
            image: mock4
        },
        {
            title: "SuperWise",
            source: "https://github.com/ethemkucuk/superwise-website",
            image: mock5
        }
    ]
}