class Horoscope {
    constructor(game){
        this.game = game;
        this.num = game.num;
        this.random();
        this.ran = 0  
        this.arr;
        this.a1;
        this.a2;
        this.a3;
        this.a4;
        this.a5;
        this.a6;
    }
    
    random(){
        this.ran = Math.floor(Math.random()*4);
        this.chooseH()
        this.a1 = this.arr[this.ran].a1;
        this.a2 = this.arr[this.ran].a2;
        this.a3 = this.arr[this.ran].a3;
        this.a4 = this.arr[this.ran].a4;
        this.a5 = this.arr[this.ran].a5;
        this.a6 = this.arr[this.ran].a6;
    }
    
    draw(){
        const context = this.game.context;
        const score = this.game.score;
        context.font = '15px monospace';
        context.fillStyle = 'white';
        
        if (score <= 0){
            context.fillText(`Really you think you deserve`, 50, 200);
            context.fillText(`a horoscope with a score`, 50, 220);
            context.fillText(`like ${score}? Try again pal...`,50, 240);
        } else {
            context.fillText(this.a1, 50, 200);
            context.fillText(this.a2, 50, 220);
            context.fillText(this.a3,50, 240);
            context.fillText(this.a4, 50, 260);
            context.fillText(this.a5, 50, 280);
            context.fillText(this.a6,50, 300);
        }
    }
    
    
    chooseH(){
        switch(this.num){
            case 1:
            this.arr = [{
                a1: "Ease up, my horny friend. Learn " ,
                a2: "to use your beguiling charm and ",
                a3: "wit to your best advantage and you",
                a4: "may not need to lower your head",
                a5: "and take aim at the nearest target",
                a6: "in order to achieve your goal."
            },
            {
                a1: "You’ve brought a banana to a" ,
                a2: "gunfight, but that’s okay. The",
                a3: "other person brought granola and milk.",
                a4: "Turns out you’re both really bad",
                a5: "at identifying weaponry, but",
                a6: "excellent at breakfast."
                
            },
            {
                a1: "Just because an old situation is" ,
                a2: "water under the bridge doesn’t",
                a3: "mean you should grab an innertube",
                a4: "and go for a swim. Leave it alone",
                a5: "and find a new puddle to play in",
                a6: ""
                
            },
            {
                a1: "It’s time for a good, long look into " ,
                a2: "your soul. Bring a flashlight and some",
                a3: "snacks, because this could take awhile.",
                a4: "Remember to pick up all your litter",
                a5: "afterward, otherwise an empty chip bag",
                a6: "could cause an existential crisis."
                
            }];
            
            break;
            
            case 2:
            this.arr = [{
                a1: "You need to quicken the pace of" ,
                a2: "your heavy hooves so that you",
                a3: "do not miss out on making a connection",
                a4: "with the attractive stranger",
                a5: "that wants to play the matador ",
                a6: "for this feisty Bull."
            },
            {
                a1: "Channel your methodical planning" ,
                a2: "into a positive force, O Mighty Bull.",
                a3: "The mighty Hercules has no more strength",
                a4: "than you when you have set your sights",
                a5: "on a desirable objective.",
                a6: ""
                
            },
            {
                a1: "A work situation has you worried." ,
                a2: "Relax. Your boss did join Instagram,",
                a3: "but he probably won’t recognize his",
                a4: "own car in all your ‘arty’ nude photos.",
                a5: "Still wouldn’t hurt to freshen up ",
                a6: "your resume’, just in case..."
                
            },
            {
                a1: "Some shine like a diamond, but you" ,
                a2: "shine like a fresh sheet of aluminum foil.",
                a3: "Your sparkle only lasts until someone wraps",
                a4: "you around leftover pizza. You may not ",
                a5: "catch everyone’s eye after that,",
                a6: "but hey, free pizza!"
                
            }];
            
            break;
            case 3:
            this.arr = [{
                a1: "Lucky you! This birth sign is " ,
                a2: "the only venue that portrays multiple",
                a3: "personalities as highly desirable",
                a4: "and socially acceptable.",
                a5: "",
                a6: ""
            },
            {
                a1: "Don’t curse the bucket when you step" ,
                a2: "in it and get your foot caught. Karma’s",
                a3: "just giving you a handy container so you",
                a4: "can scoop up some opportunities this week.",
                a5: "Take your foot out first, though.",
                a6: ""
                
            },
            {
                a1: "Actions speak louder than words, and your" ,
                a2: "entire wardrobe is screaming “intervention.” ",
                a3: "Next time, don’t ask your next door ",
                a4: "neighbor in the tube top and 80s Hammer pants",
                a5: "to be your personal shopper. Go for the guy",
                a6: "dressed in trash bags instead "
                
            },
            {
                a1: "Dance like no one’s watching, sing like" ,
                a2: "you’re in the shower, but text like your",
                a3: "grandmother is reading every single one.",
                a4: "That goes double for pics. Granny doesn’t ",
                a5: "want to see your bits... ",
                a6: ""
                
            }];
            
            break;
            case 4:
            this.arr = [{
                a1: "There’s a hot new honey coming into your" ,
                a2: "life, so make sure you throw away all",
                a3: "the undies with the holes in them. If you",
                a4: "forget, say it’s the latest trend in ",
                a5: "sexy granny pant-lingerie and",
                a6: "open an extra bottle of wine..."
            },
            {
                a1: "A work situation has you worried." ,
                a2: "Relax. Your boss did join Instagram,",
                a3: "but he probably won’t recognize his",
                a4: "own car in all your ‘arty’ nude photos.",
                a5: "Still wouldn’t hurt to freshen up ",
                a6: "your resume’, just in case..."
                
            },
            {
                a1: "Some days you’re the flower, other" ,
                a2: "days you’re the sneeze. Either way,",
                a3: "some allergy meds will make Wednesday ",
                a4: "easier. Or you could just take",
                a5: "Benadryl and skip from Tuesday to",
                a6: "Friday..."
                
            },
            {
                a1: "If you have to kiss frogs to find a prince," ,
                a2: "imagine what you’ll need to do for someone",
                a3: "really powerful, like a sorcerer or the",
                a4: "tech nerd who can fix your computer. ",
                a5: "Stock up on Red Bull, sushi and massage oil.",
                a6: ""
                
            }];
            
            break;
            case 5:
            this.arr = [{
                a1: "Leos are known for their benevolent" ,
                a2: "natures and leadership. Look for help",
                a3: "from a modest, unassuming little ",
                a4: "mouse that you know. ",
                a5: "",
                a6: ""
            },
            {
                a1: "Resist the urge to toy with" ,
                a2: "this tiny creature or you may indeed ",
                a3: "have to deal with a thorn in your ",
                a4: "butt...or was it your paw?",
                a5: "",
                a6: ""
                
            },
            {
                a1: "You have a mighty roar, but you also" ,
                a2: "have a rather cute meow. Quit straining",
                a3: "those vocal cords, and use your kitten",
                a4: "charms to get what you want on Friday.",
                a5: "There will be catnip.",
                a6: ""
                
            },
            {
                a1: "Roar my mighty Lion! These next few" ,
                a2: "weeks are bringing surprising adventures",
                a3: "and delights. Leave the hunt to others",
                a4: "and take time to enjoy your environment.",
                a5: "",
                a6: ""
                
            }];
            
            break;
            case 6:
            this.arr = [{
                a1: "On Saturday, you'll stand out more " ,
                a2: "than a game of Where’s Waldo at ",
                a3: "a nudist colony. Give up that woolly",
                a4: "hat and pinch some color on all ",
                a5: "four of your cheeks if you want",
                a6: "to fit in."
            },
            {
                a1: "Touch a goldfish, frolic in the leaves" ,
                a2: "and be relaxed enough to double dip",
                a3: "that Nacho Chip ",
                a4: "",
                a5: "",
                a6: ""
                
            },
            {
                a1: "You are sugar and spice with hot sauce" ,
                a2: "thrown in for flavor. Next time someone",
                a3: "thinks you have no bite, kick ‘em in",
                a4: "the Tabasco and make ‘em howl",
                a5: "",
                a6: ""
                
            },
            {
                a1: "Virgo is the sign of perfectionism and" ,
                a2: "beauty. Although you demand a lot from ",
                a3: "those around you, it is no more than",
                a4: "what you are willing to demand of",
                a5: "yourself.",
                a6: ""
                
            }];
            
            break;
            case 7:
            this.arr = [{
                a1: "Level headed Libras can be exceptionally" ,
                a2: "balanced and calm. Just don't make a",
                a3: "perfectly balanced life your ",
                a4: "only goal in life",
                a5: "",
                a6: ""
            },
            {
                a1: "If you're planning to spend the weekend" ,
                a2: "rearranging your silverware drawer you",
                a3: "may be past the point of rehabilitation.",
                a4: "Still you should make the effort to break",
                a5: "out of your self-imposed box and learn to",
                a6: "experience the full range of life's adventures."
                
            },
            {
                a1: "You can ask the stars for advice, but they don’t" ,
                a2: "really know anything. Except for Tom Hanks.",
                a3: "He knows quite a lot. On Tuesday,",
                a4: "do whatever he does.",
                a5: "",
                a6: ""
                
            },
            {
                a1: "Your moment is here, and the spotlight is" ,
                a2: "trained on you like a Labrador with a",
                a3: "squirrel. No time to hide your nuts now;",
                a4: "get out on that branch, shake your tail ",
                a5: "and show ‘em all how it’s done.",
                a6: ""
                
            }];
            
            break;
            case 8:
            this.arr = [{
                a1: "Sensuous, sexy, seductive and secretive" ,
                a2: "all are words that describe the most",
                a3: "passionate of all birth signs-the Scorpio.",
                a4: "",
                a5: "",
                a6: ""
            },
            {
                a1: "If the CIA is serious about wanting to learn" ,
                a2: "how to deal with terrorists they should study",
                a3: "the get even tactics used by a group of angry ",
                a4: "Scorpios. Your jealousy will be put to the  ",
                a5: "test in the coming weeks as parties bring you ",
                a6: "back in contact with some people from your past."
                
            },
            {
                a1: "You are sugar and spice with hot sauce" ,
                a2: "thrown in for flavor. Next time someone",
                a3: "thinks you have no bite, kick ‘em in",
                a4: "the Tabasco and make ‘em howl",
                a5: "",
                a6: ""
                
            },
            {
                a1: "You’re looking good and feeling sassy on" ,
                a2: "Wednesday.  That new shirt will earn you",
                a3: "some free drinks and envious glares from",
                a4: "everyone in the office. Bask in your own ",
                a5: "glory.",
                a6: ""
                
            }];
            
            break;
            case 9:
            this.arr = [{
                a1: "Certain events in the near future could" ,
                a2: "cause you to behave more like fellow",
                a3: "Sagittarian, Britney Spears during",
                a4: "her worst meltdown moments. Beware!",
                a5: "",
                a6: ""
            },
            {
                a1: "Dance like no one’s watching, sing like" ,
                a2: "you’re in the shower, but text like your",
                a3: "grandmother is reading every single one.",
                a4: "That goes double for pics. Granny doesn’t ",
                a5: "want to see your bits... ",
                a6: ""
                
            },
            {
                a1: "You are sugar and spice with hot sauce" ,
                a2: "thrown in for flavor. Next time someone",
                a3: "thinks you have no bite, kick ‘em in",
                a4: "the Tabasco and make ‘em howl",
                a5: "",
                a6: ""
                
            },
            {
                a1: "There’s a hot new honey coming into your" ,
                a2: "life, so make sure you throw away all",
                a3: "the undies with the holes in them. If you",
                a4: "forget, say it’s the latest trend in ",
                a5: "sexy granny pant-lingerie and",
                a6: "open an extra bottle of wine..."
                
            }];
            
            break;
            case 10:
            this.arr = [{
                a1: "Time to shake up the way people look" ,
                a2: "at you. Party season is approaching",
                a3: "and you can be the life of any party",
                a4: "if you allow yourself to channel some",
                a5: "of the characteristics evidenced",
                a6: "by fellow Capricorn Elvis"
            },
            {
                a1: "You will find that a little uncertainty" ,
                a2: "adds a lot of excitement to the ride.",
                a3: "",
                a4: "",
                a5: "",
                a6: ""
                
            },
            {
                a1: "Your stubbornness is legendary; that’s" ,
                a2: "why the highway makes a loop around your",
                a3: "house instead of going through it. Pick",
                a4: "your battles carefully on Friday, though.",
                a5: "Someone you meet isn’t as easygoing as ",
                a6: "the guys on the road crew."
                
            },
            {
                a1: "It would be easier if bad decisions" ,
                a2: "were labeled. Here’s a hint: if someone",
                a3: "tells you about a fantastic new moneymaking",
                a4: "venture involving ferrets and Velcro jewelry,",
                a5: "and they’re holding a tequila bottle,",
                a6: "consider yourself warned...."
                
            }];
            
            break;
            case 11:
            this.arr = [{
                a1: "Dance like no one’s watching, sing like" ,
                a2: "you’re in the shower, but text like your",
                a3: "grandmother is reading every single one.",
                a4: "That goes double for pics. Granny doesn’t ",
                a5: "want to see your bits... ",
                a6: ""
            },
            {
                a1: "There’s a hot new honey coming into your" ,
                a2: "life, so make sure you throw away all",
                a3: "the undies with the holes in them. If you",
                a4: "forget, say it’s the latest trend in ",
                a5: "sexy granny pant-lingerie and",
                a6: "open an extra bottle of wine..."
                
            },
            {
                a1: "You can ask the stars for advice, but they don’t" ,
                a2: "really know anything. Except for Tom Hanks.",
                a3: "He knows quite a lot. On Tuesday,",
                a4: "do whatever he does.",
                a5: "",
                a6: ""
                
            },
            {
                a1: "Don’t tempt the universe by saying the" ,
                a2: "new year can’t be worse than the old one. ",
                a3: "That’s just challenging karma. Keep your",
                a4: "head down, and carry a sharp stick just",
                a5: "in case it gets ideas.",
                a6: ""
                
            }];
            
            break;
            case 12:
            this.arr = [{
                a1: "A close acquaintance will come to you for" ,
                a2: "advice very soon, and it may help if you",
                a3: "keep that iPod playing in one ear",
                a4: "while you hear him out.",
                a5: "",
                a6: ""
            },
            {
                a1: "The best song for you to have on" ,
                a2: "your download list is Beyonce's",
                a3: "Single Ladies...",
                a4: "",
                a5: "",
                a6: ""
                
            },
            {
                a1: "Feeling rather odd lately? It could be" ,
                a2: "a sudden outbreak of happiness. ",
                a3: "Sit down and see if it goes away.",
                a4: "If it doesn’t, maybe you’re just doing ",
                a5: "the right things for a change. ",
                a6: "Try to cope with that."
                
            },
            {
                a1: "Hey you. Yeah, you. Things are looking " ,
                a2: "up and you’re amazing, you magnificent ",
                a3: "thing. Don’t feel guilty over your ",
                a4: "good fortune; take it and run into 2020.",
                a5: "",
                a6: ""
                
            }];
            
            break;
            default:
            this.arr =[]
        }
    }
}
