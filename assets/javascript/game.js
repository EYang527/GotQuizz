var QuizObj=[{
    question: "Which of the following character is not a Stark ?",
    visual: './assets/images/answer1.jpg',
    possible1:"Jon",
    possible2:"Brandon",
    possible3:"Eddard",
    possible4:"Sansa",
    answer:1
    },
    {
    question: "What's the name of Arya's Direwolf",
    visual: './assets/images/answer2.jpg',
    possible1:"Summer",
    possible2:"Ghost",
    possible3:"Nymeria",
    possible4:"Lady",
    answer:3
    },
    {
    question: "What is Brienne sword's name?",
    visual: './assets/images/answer3.jpg',
    possible1:"Needle",
    possible2:"LongClaw",
    possible3:"Heartsbane",
    possible4:"Oathkeeper",
    answer:4
    },
    {
    question: "What is Rhaeghar Tagaryen relation for Danaerys?",
    visual: './assets/images/answer4.jpg',
    possible1:"brother",
    possible2:"uncle",
    possible3:"father",
    possible4:"cousin",
    answer:1
    },
    {
    question: "What is the name of the dragon killed by the Night king?",
    visual: './assets/images/answer5.jpg',
    possible1:"Drogo",
    possible2:"Rhaegar",
    possible3:"Viserion",
    possible4:"Smaug",
    answer:3
    },
    {
    question: "Who is NOT on Arya's Kill list?",
    visual: './assets/images/answer6.jpg',
    possible1:"Jaime Lannister",
    possible2:"Walder Frey",
    possible3:'Gregor "The Mountain" Clegane',
    possible4:"Joffrey Baratheon",
    answer:1
    },    
    {
    question: "Which House has been eradicard after the destruction of the Great Sept of Baelor?",
    visual: './assets/images/answer7.jpg',
    possible1:"House Lannister",
    possible2:"House Stark",
    possible3:"House Targaryen",
    possible4:"House Baratheon",
    answer:4
    }, 
    {
    question: "Which one of the following didn't join the fight of the bastard alongside with Stark?",
    visual: './assets/images/answer8.jpg',
    possible1:"the Wildlings",
    possible2:"House Mormont",
    possible3:"House Arryn",
    possible4:"Houses Karstark",
    answer:4
    },
    {
    question: "Where were Sansa and jon snow reunited?",
    visual: './assets/images/answer9.jpg',
    possible1:"King's Landing",
    possible2:"DragonStone",
    possible3:"Winterfell",
    possible4:"Castle black",
    answer:4
    },
    {
    question: 'Who is called the "mountain"?',
    visual: './assets/images/answer10.jpg',
    possible1:"Igor Clegane",
    possible2:"Sandor Clegane",
    possible3:"Gregor Clegane",
    possible4:"Tormund Giantsbane",
    answer:3
    },
    {
    question: "Which of Ramsey Bolton arrows killed Rickon in the Battle of Bastards?",
    visual: './assets/images/answer11.jpg',
    possible1:"Second",
    possible2:"Third",
    possible3:"Fourth",
    possible4:"Fifth",
    answer:3
    },
    {
    question: 'what does "Valar Morghulis" means?',
    visual: './assets/images/answer12.jpg',
    possible1:"All mem must obey",
    possible2:"All men must die",
    possible3:"All men must serve",
    possible4:"All men must fight",
    answer:2
    },
    {
    question: "What is Vary's nickname?",
    visual: './assets/images/answer13.jpg',
    possible1:"LittleFinger",
    possible2:"Spider",
    possible3:"Imp",
    possible4:"Viper",
    answer:2
    },
    {
    question: "Which of the following character did Maegary tyrell not married?",
    visual: './assets/images/answer14.jpg',
    possible1:"Renly Baratheon",
    possible2:"Stannis Baratheron",
    possible3:"Joeffrey Baratheon",
    possible4:"Tommen Baratheon",
    answer:2
    },
    {
    question: "Which of the following character is the master of coin from the small council?",
    visual: './assets/images/answer15.jpg',
    possible1:"Varys",
    possible2:"Grand Maester Pycelle",
    possible3:"Tyrion Lannister",
    possible4:"Peter Baelish",
    answer:4
    },
    {
    question: "Which of the following is not a department of the Night watch?",
    visual: './assets/images/answer16.jpg',
    possible1:"The Watchers",
    possible2:"The Hunters",
    possible3:"The Stewards",
    possible4:"The Builders",
    answer:1
        },]



// ===================== Global variables ===================
    var clockrunning=false;    
    let index=0;
    let counter=20;
    let timeOut=false;
    let intervalId;
    let yourAnswer="";
    let answered=0;
    let check="unanswered";
    let saveAnswer=0;
    let unanswered=0;
    let endQuizz=false;
    let correctAnswers=0;
    let uncorrectAnswers=0;
 


    function startTimer()
    {   
       
        if (!clockrunning){
            //console.log("inside clockRunning");
            clockrunning=true;
            intervalId=setInterval(count,1000);           
        }
        else
        console.log("unknown issue");
    }
       

    function count(){
    
    counter--;
    //console.log(counter);
    $(".timerContainer").text(`Time Remaining ${counter} Second(s)`);
    
        if ((counter==0) && !endQuizz){
            //console.log("time Out!!!");
            clearInterval(intervalId);
            // clock stopping !!!
            check="timeout"
            unanswered++;
            clockrunning=false;
           
            // show correct answer + print time out
            showAnswer();
        }
     
    }      
       


    $(document).ready(function(){
        
        $("#welcomeModal").modal('show');
    });

    function init(){
        render(index);    
        startTimer();     

    }

    $(".validButton").on('click',function(){

        $("#welcomeModal").modal('hide');
        init();

    })

    $(".cancelButton").on('click',function(){

        window.close();

    })


    // function to check with answer has been selected
    $(document).on('click','.possible',function(){
        //console.log("clickable div");
        answered++;
        if (yourAnswer==="")
        {
            yourAnswer=$(this).data("value");
        console.log("index in click is : "+index);
        console.log("question "+(index+1)+" is "+yourAnswer);
        // run checkAnswer function
        console.log(checkAnswer(yourAnswer));
        yourAnswer=""; // reset answer
        showAnswer();
        }
        
        
        
    })
    
    function render(index)
    {
        $(".questionContainer").text("Question"+" "+(index+1)+" : "+QuizObj[index].question);
        $(".answersContainer").html(    `<div class="possible" data-value="1" col-md-7> A- ${QuizObj[index].possible1} </div>
        <div class="possible" col-md-7 data-value="2"> B- ${QuizObj[index].possible2} </div>
        <div class="possible" col-md-7 data-value="3"> C- ${QuizObj[index].possible3} </div>
        <div class="possible" col-md-7 data-value="4"> D -${QuizObj[index].possible4} </div>`);
    }


    function time5sec(){

        //console.log("time 5sec up ");
        counter=20;
        startTimer();
        render(index);
    }
    
    function showResults()
    {
        var level=gradingQuizz(correctAnswers);

        console.log(level);
        
        $(".timerContainer").empty();
        $(".questionContainer").empty();
        $(".answersContainer").empty();
    
        var newDiv=$('<div class="finalResult">');
        $(".timerContainer").append(newDiv);
        $(".finalResult").html(`<h3 class="level"> Level : ${level[0]} </h3>
                                <p> Unanswered questions : ${unanswered}</p> 
                                <p>    Corrected answers :    ${correctAnswers}</p>
                                <p>    incorrected answers : ${uncorrectAnswers}</p>
                                <img src=${level[2]}></img>
                                <p class="quote">${level[1]}</p>


        `)
        let newButton = $("<button>");

        newButton.text('Try Again');
        newButton.addClass("resetButton");
        $(".timerContainer").append(newButton);

        //console.log("answers: " +answers);
        console.log("END RESULTS");
        console.log("unanswers: "+unanswered);
        console.log("Uncorrected answers : "+uncorrectAnswers);
        console.log("Corrected answers: "+correctAnswers);

        // rendering page with level
   

    }

    //$(document).on("click", ".movie-button", function(){

    $(document).on("click",".resetButton",function(){
        console.log("inside button");
        $(".timerContainer").empty();
        index=0;
        counter=20;
        clockrunning=false;    
   
        timeOut=false;
        intervalId;
        yourAnswer="";
        answered=0;
        check="unanswered";
        saveAnswer=0;
        unanswered=0;
        endQuizz=false;
        correctAnswers=0;
        uncorrectAnswers=0;
        
        init();


    });

    function checkAnswer(answer){
        //stop the timer
        clearInterval(intervalId);
        clockrunning=false;
        saveAnswer=(QuizObj[index].answer)+1;
        console.log(`### saveanswer in chk is : ${saveAnswer}`);

        console.log(`q${saveAnswer} answer is ${QuizObj[index].answer}`);
        
        if (parseInt(answer)===QuizObj[index].answer)
        {   correctAnswers++;
            check="correct";
        return check
        }        
        else{
            uncorrectAnswers++;
            check="incorrect";
        return check
        }

    }

    // Function called everytime timeOut, incorrect answer or correct answer
    function showAnswer()
    {
        let displayAnswer;
        saveAnswer=(QuizObj[index].answer); // retrieve answer from object in array 
        // console.log(`index is Ans :${index}`);
        // console.log(`saveAnswer is ${saveAnswer+1}`);
        // console.log(`retrieve answer from object ${QuizObj[0].possible1}`)
        
        displayAnswer="possible"+saveAnswer;

        
        console.log(`answer is : ${QuizObj[index][displayAnswer]}`); //bad expression
        //console.log("answer2222 is "+QuizObj[0][1]);
        
        //clear div tag answers
        $(".answersContainer").empty();
        $(".answersContainer").html(`<h3 class="validation"> ${check} </h3> <img src="${QuizObj[index].visual}" class="result .img-rounded img-responsive">`);
        $(".answersContainer").append(`<h2 class="answer">answer is ${QuizObj[index][displayAnswer]} </h2>`);

        index++; // Next question
        if(index>15)    // Stop counter if reach end of Quizz (quizzobj[0].length-1)
        {
            clearInterval(intervalId);
            clockrunning=false;
            showResults();            
            return endQuizz;
        }
        setTimeout(time5sec,3000);  // set timeOut to 3 sec before next question  
    }

    function gradingQuizz(a){
        
        var gradeArray=[];
        var percentage=((a/16))*100;
        console.log(percentage);
        
        if(percentage>80)
        { 
        gradeArray.push("Master");
         gradeArray.push("You may have the right to sit on the Throne!");
         gradeArray.push("./assets/images/master.jpg");
        
        }
        else if(percentage>60)
        {  gradeArray.push("skilled");
        gradeArray.push("Need to drink more ...");
        gradeArray.push("./assets/images/skilled.jpg");
          
        }
        else if(percentage>40){
            gradeArray.push("Learner");
            gradeArray.push("Hold the Door!");
            gradeArray.push("./assets/images/learner.jpg");
        }
        else if(percentage>=0){
            gradeArray.push("Newbie");
            gradeArray.push("SHAME SHAME SHAME!");
            gradeArray.push("./assets/images/newbie.jpg");
        }
        else
        {
            alert("error occurs");
            console.log("error occur for grading");
        } 

        return gradeArray;

    }