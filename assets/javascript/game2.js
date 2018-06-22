var QuizObj=[{
    question: "Which of the following character is not a Stark ?",
    visual: './assets/images/bruceBanner.jpg',
    possible1:"Jon",
    possible2:"Brandon",
    possible3:"Eddard",
    possible4:"Sansa",
    answer:1
    },
    {
    question: "What's the name of Arya's Direwolf",
    visual: './assets/images/bruceBanner.jpg',
    possible1:"Summer",
    possible2:"Ghost",
    possible3:"Nymeria",
    possible4:"Lady",
    answer:3
    },
    {
    question: "What is Brienne sword's name?",
    visual: './assets/images/bruceBanner.jpg',
    possible1:"Needle",
    possible2:"LongClaw",
    possible3:"Heartsbane",
    possible4:"Oathkeeper",
    answer:4
    },
    {
    question: "What is Rhaeghar Tagaryen relation for Danaerys?",
    visual: './assets/images/bruceBanner.jpg',
    possible1:"brother",
    possible2:"uncle",
    possible3:"father",
    possible4:"cousin",
    answer:1
    },
    {
    question: "What is the name of the dragon killed by the Night king?",
    visual: './assets/images/bruceBanner.jpg',
    possible1:"Drogo",
    possible2:"Rhaegar",
    possible3:"Viserion",
    possible4:"Smaug",
    answer:3
    },
    {
    question: "Who is NOT on Arya's Kill list?",
    visual: './assets/images/bruceBanner.jpg',
    possible1:"Jaime Lannister",
    possible2:"Walder Frey",
    possible3:'Gregor "The Mountain" Clegane',
    possible4:"Joffrey Baratheon",
    answer:1
    },    
    {
    question: "Which House has been eradicard after the destruction of the Great Sept of Baelor?",
    visual: './assets/images/bruceBanner.jpg',
    possible1:"House Lannister",
    possible2:"House Stark",
    possible3:"House Targaryen",
    possible4:"House Baratheon",
    answer:4
    }, 
    {
    question: "Which one of the following didn't join the fight of the bastard alongside with Stark?",
    visual: './assets/images/bruceBanner.jpg',
    possible1:"the Wildlings",
    possible2:"House Mormont",
    possible3:"House Arryn",
    possible4:"Houses Karstark",
    answer:4
    },
    {
    question: "Where were Sansa and jon snow reunited?",
    visual: './assets/images/bruceBanner.jpg',
    possible1:"King's Landing",
    possible2:"DragonStone",
    possible3:"Winterfell",
    possible4:"Castle black",
    answer:4
    },
    {
    question: 'Who is called the "mountain"?',
    visual: './assets/images/bruceBanner.jpg',
    possible1:"Igor Clegane",
    possible2:"Sandor Clegane",
    possible3:"Gregor Clegane",
    possible4:"Tormund Giantsbane",
    answer:3
    },
    {
    question: "Which of Ramsey Bolton arrows killed Rickon in the Battle of Bastards?",
    visual: './assets/images/bruceBanner.jpg',
    possible1:"Second",
    possible2:"Third",
    possible3:"Fourth",
    possible4:"Fifth",
    answer:3
    },
    {
    question: 'what does "Valar Morghulis" means?',
    visual: './assets/images/bruceBanner.jpg',
    possible1:"All mem must obey",
    possible2:"All men must die",
    possible3:"All men must serve",
    possible4:"All men must fight",
    answer:2
    },
    {
    question: "What is Vary's nickname?",
    visual: './assets/images/bruceBanner.jpg',
    possible1:"LittleFinger",
    possible2:"Spider",
    possible3:"Imp",
    possible4:"Viper",
    answer:2
    },
    {
    question: "Which of the following character did Maegary tyrell not married?",
    visual: './assets/images/bruceBanner.jpg',
    possible1:"Renly Baratheon",
    possible2:"Stannis Baratheron",
    possible3:"Joeffrey Baratheon",
    possible4:"Tommen Baratheon",
    answer:2
    },
    {
    question: "Which of the following character is the master of coin from the small council?",
    visual: './assets/images/bruceBanner.jpg',
    possible1:"Varys",
    possible2:"Grand Maester Pycelle",
    possible3:"Tyrion Lannister",
    possible4:"Peter Baelish",
    answer:4
    },
    {
    question: "Which of the following is not a department of the Night watch?",
    visual: './assets/images/bruceBanner.jpg',
    possible1:"The Watchers",
    possible2:"The Hunters",
    possible3:"The Stewards",
    possible4:"The Builders",
    answer:1
        },]



// ===================== Global variables ===================
    var clockrunning=false;    
    let index=0;
    let counter=10;
    var timeout=false;
    var timeup=false;



    function startTimer()
    {   
        console.log("inside timer");
        console.log("counterInside is "+counter);
        console.log("clockrunningInside is: "+clockrunning);
        if (!clockrunning){
            console.log("inside clockRunning");
            clockrunning=true;
            intervalId=setInterval(count,1000);

        }
        else
        console.log("issue");
    }
       

    function count(){
    console.log("inside count function");
    counter--;
    console.log(counter);
    $(".timerContainer").text(`Time Remaining ${counter} Second(s)`);
    
        if (counter==0){
            console.log("time Out!!!");
            clearInterval(intervalId);
            clockrunning=false;
            timeout=true;
            index++;
            console.log("time out inside counter : "+timeout);
            // //setTimeout(timer5sec,1000*5);
            count=10;
            startTimer();
            render(index);
            // setTimeout(timeUp,1000*5);
            // if (timeup==true) {
            //     timeup=false;
            //     counter=10;
            //     startTimer();

            // }
        }


    }      
       


    $(document).ready(function(){
    
      
        render(index);    
        startTimer();
        
       

    console.log(QuizObj[0].question);
    console.log(timeout);
    // if (timeout===true)
    // {
    //     setTimeout(time5sec,1000*5);
    // }
    // set timer 
    
    });


    function render(index)
    {
        $(".questionContainer").text("Question : "+QuizObj[index].question);
        $(".answersContainer").html(    `<div class="possible"> A- ${QuizObj[index].possible1} </div>
        <div class="possible"> B- ${QuizObj[index].possible2} </div>
        <div class="possible"> C- ${QuizObj[index].possible3} </div>
        <div class="possible"> D -${QuizObj[index].possible4} </div>`);
    }

    function timer5sec()
    {
        
        // re-initialize count=10
        count=10;
        //console.log(setInterval2);
        console.log("index= "+ index);
        console.log("clockrunning is "+clockrunning);
        console.log("counter is "+counter);
        // clear both contents
        $(".questionContainer").empty();
        $(".answersContainer").empty();
        counter=10;
        render(index);
        startTimer();
    }       


    function timeUp() {
        console.log("time is up");
        timeup=true;
    }
