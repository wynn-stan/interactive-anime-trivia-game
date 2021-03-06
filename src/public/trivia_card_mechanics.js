 // making the correct symbol
       /*
            get the canvas context/drawing space
            plot the points
            fill with color
       */

            const canvas = document.getElementById("isValidCanvas");
            const ctx = canvas.getContext("2d");
     
           function drawCorrectSymbol(){
              clearCanvas();
     
              ctx.beginPath();
              ctx.moveTo(8,20);
              ctx.lineTo(18,30);
              ctx.lineTo(32,10);
              ctx.lineTo(27,6);
              ctx.lineTo(18,19);
              ctx.lineTo(13,13);
              ctx.lineTo(8,20);
     
              ctx.stroke();
              ctx.fill();
           }
     
           function drawWrongSymbol(){
     
              clearCanvas();
     
              ctx.beginPath();
              ctx.moveTo(2,8);
              ctx.lineTo(9,1);
              ctx.lineTo(19,11);
              ctx.lineTo(29,1);
              ctx.lineTo(36,8);
     
              ctx.lineTo(26,18);
              ctx.lineTo(36,28);
              ctx.lineTo(29,35);
              ctx.lineTo(19,25);
              ctx.lineTo(9, 35);
              ctx.lineTo(2, 28);
              ctx.lineTo(12,18);
              ctx.lineTo(2, 8);
     
              ctx.fill();
           }
     
           function clearCanvas(){
              ctx.clearRect(0,0,canvas.width, canvas.height);
           }
     
     
     
             //rgb(134, 142, 150);
            let jsonData = JSON.stringify({
                 "response_code":0,
                 "results":[
                    {
                       "category":"Entertainment: Japanese Anime & Manga",
                       "type":"multiple",
                       "difficulty":"hard",
                       "question":"In the anime Initial D, how does Takumi Fujiwara describe a drift?",
                       "correct_answer":"&#039;. . . the front tires slide so the car won&#039;t face the inside&#039;",
                       "incorrect_answers":[
                          "&#039;. . . the wheels lose traction, making the car slide sideways&#039;",
                          "&#039;. . . the car oversteers through a curve, causing it to turn faster&#039;",
                          "&#039;. . . you turn a lot&#039;"
                       ]
                    },
                    {
                       "category":"Entertainment: Japanese Anime & Manga",
                       "type":"multiple",
                       "difficulty":"easy",
                       "question":"Who is the main character with yellow hair in the anime Naruto?",
                       "correct_answer":"Naruto",
                       "incorrect_answers":[
                          "Ten Ten",
                          "Sasuke",
                          "Kakashi"
                       ]
                    },
                    {
                       "category":"Entertainment: Japanese Anime & Manga",
                       "type":"multiple",
                       "difficulty":"easy",
                       "question":"Which of the following originated as a manga?",
                       "correct_answer":"Akira",
                       "incorrect_answers":[
                          "Cowboy Bebop",
                          "High School DxD",
                          "Gurren Lagann"
                       ]
                    },
                    {
                       "category":"Entertainment: Japanese Anime & Manga",
                       "type":"multiple",
                       "difficulty":"hard",
                       "question":"In &quot;One Piece&quot;, what does &quot;the Pirate King&quot; mean to the captain of the Straw Hat Pirates?",
                       "correct_answer":"Freedom",
                       "incorrect_answers":[
                          "Promise",
                          "Adventure",
                          "Friendship"
                       ]
                    },
                    {
                       "category":"Entertainment: Japanese Anime & Manga",
                       "type":"multiple",
                       "difficulty":"hard",
                       "question":"Which person from &quot;JoJo&#039;s Bizarre Adventure&quot; does NOT house a reference to a band, artist, or song earlier than 1980?",
                       "correct_answer":"Giorno Giovanna",
                       "incorrect_answers":[
                          "Josuke Higashikata",
                          "Jolyne Cujoh",
                          "Johnny Joestar"
                       ]
                    },
                    {
                       "category":"Entertainment: Japanese Anime & Manga",
                       "type":"multiple",
                       "difficulty":"medium",
                       "question":"In &quot;To Love-Ru: Darkness&quot;, which of the girls attempt making a harem for Rito Yuuki?",
                       "correct_answer":"Momo Deviluke",
                       "incorrect_answers":[
                          "Yami (Golden Darkness)",
                          "Haruna Sairenji",
                          "Mea Kurosaki"
                       ]
                    },
                    {
                       "category":"Entertainment: Japanese Anime & Manga",
                       "type":"multiple",
                       "difficulty":"medium",
                       "question":"In Pok&eacute;mon Chronicles, why was Misty afraid of Gyarados?",
                       "correct_answer":"She crawled into it&#039;s mouth as a baby.",
                       "incorrect_answers":[
                          "She found it scary.",
                          "She was badly injured from it.",
                          "It is part Bug."
                       ]
                    },
                    {
                       "category":"Entertainment: Japanese Anime & Manga",
                       "type":"multiple",
                       "difficulty":"easy",
                       "question":"In Ms. Kobayashi&#039;s Dragon Maid, who is Kobayashi&#039;s maid?",
                       "correct_answer":"Tohru",
                       "incorrect_answers":[
                          "Lucoa",
                          "Kanna",
                          "Elma"
                       ]
                    },
                    {
                       "category":"Entertainment: Japanese Anime & Manga",
                       "type":"multiple",
                       "difficulty":"medium",
                       "question":"Who is the main character in One Piece?",
                       "correct_answer":"Luffy",
                       "incorrect_answers":[
                          "Shanks",
                          "Zoro",
                          "Smoker"
                       ]
                    },
                    {
                       "category":"Entertainment: Japanese Anime & Manga",
                       "type":"multiple",
                       "difficulty":"medium",
                       "question":"Which of the following films was NOT directed by Hayao Miyazaki?",
                       "correct_answer":"Wolf Children",
                       "incorrect_answers":[
                          "Princess Mononoke",
                          "Spirited Away",
                          "Kiki&#039;s Delivery Service"
                       ]
                    }
                 ]
              });
             
           /*
             Generating Trivia // setting the data for the current trivia
              set an array to store numbers from 0 to that of the number of responses in the json
              select a random number from 0 to the number of elements in the array - 1
              remove the element at availableTrivia[random_numuber]
                 use availableTrivia.splice(random_number, 1)
                    starting at index random_number, remove 1 element, i.e. itself
              select the element at array[random_number]
              set trivia object to that value
              set new property trivia.allAnswers = trivia.incorrect_answers.
                 trivia.allAnswers.push(trvia.correct_answers)
           */
     
             let triviaData = JSON.parse(jsonData);
             let availableTrivia = [0,1,2,3,4,5,6,7,8,9];
     
             let currentTrivia;
             let next_button = document.getElementById("next_button");
              let play_button = document.getElementById("play_button");
     
     
             /*
                 listen to play_button click event
                 listen to next_button click event
             */
     
              function addEventHandlersToButtons(){
                 document.getElementById("next_button").addEventListener("click", generateNextTrivia);
                 document.getElementById("play_button").addEventListener("click", processResponse);
              }
     
              addEventHandlersToButtons();         
     
             function displayNextButton(){
                next_button.style.display = "inline-block";
             }
     
             function hideNextButton(){
                next_button.style.display = "none";
             }
     
             function displayPlayButton(){
                play_button.style.display = "inline-block";
             }
     
             function hidePlayButton(){
                 play_button.style.display = "none";
             }
     
             function setCurrentTrivia(data){
                 currentTrivia = data;
             }
     
             function reduceAvailableTrivia(index){
                availableTrivia.splice(index,1);
             }
     
             function generateTrivia(){
                 
                 let randomNumber = Math.round(Math.random() * (availableTrivia.length - 1));
                 let selectedTrivia = availableTrivia[randomNumber]
                 let trivia = triviaData.results[selectedTrivia];
                 trivia.allAnswers = trivia.incorrect_answers;
                 trivia.allAnswers.push(trivia.correct_answer);
     
                 reduceAvailableTrivia(randomNumber);
     
                 console.log(availableTrivia);
     
                 return trivia;
     
             }
            
             /*
                 When page loads 
                    create new trivia and set data of card to that value
                    
                    make next button have a display of none
                    display the playbutton
                 When generateTrivia is called 
                    create new trivia and set data of card to that value
                    make next button have a display of none
                    display the play button
     
             */
     
             window.onload = (e) => {
                let newTrivia = generateTrivia();
                setCurrentTrivia(newTrivia);
                setCardData(newTrivia);
                hideNextButton();
                displayPlayButton()
                clearCanvas();
     
             }
             
             function generateNextTrivia(){
                let newTrivia = generateTrivia();
                setCurrentTrivia(newTrivia);
                setCardData(newTrivia)
                hideNextButton();
                displayPlayButton();
                clearCanvas();
            }
     
              /*
                 trivia processing mechanics.
                 if answer picked is the same as correct answer, give 3 points
                 1 wrong - 2 points
                 2 wrongs - 1 points
                 3 wrongs - 0 points
                 if you score 0 or you pick the right answer, change the card data
     
                 set initial score to 0
                 when play button is pressed, call processAnswer function
                 to process response, get the response            
                    - get all radio elements
                    - for each radio, check if it is checked.
                    - return the value of the one that is checked
                    - if none are checked, alert to select an answer before tapping play
                 check if response is the same as the correctAnswer
                    if yes
                       alert correct answer
                       display the next button
                    if no, 
                       alert wrong answer
              */
     
     
             function getCurrentTrivia(){
                return currentTrivia;
             }
     
             /*
                 processing wrong answers 
                    alert wrong answer
                    uncheck the selected answers
                 processing right answers 
                    alert right answers
                    unchec the selected answers
                    displya next button
                 
             */
     
             /*
                 if answer is wrong, 
                    drawWrongSymbol on canvas
                    
                 if answer is right, 
                    drawCorrectSymbol on canvas
     
                 if generateNextTrivia is called
                    clearCanvas
                 when window loads 
                    clearCanvas
             */
     
             function processWrongAnswer(radio_element){
                 drawWrongSymbol();
                 unCheckRadio(radio_element);
                 displayPlayButton();
             }
     
             function processCorrectAnswer(radio_element){
                drawCorrectSymbol();
                unCheckRadio(radio_element);
                displayNextButton();
                hidePlayButton();
             }
     
             function unCheckRadio(radio_element){
                radio_element.checked = false;
             }
     
              function processResponse(){
                 const response = getResponse(); 
                 let hasResponse = response != undefined;
                 if(hasResponse){
                    const trivia = getCurrentTrivia();
                    if(response.value == undefined){
                       alert("Please select an answer before tapping Play");
                    }else{
                       let responseIsCorrect = trivia.correct_answer == response.value;
                       if(responseIsCorrect){
                          processCorrectAnswer(response);
                       }else {
                          processWrongAnswer(response);
                       }
                    }
                 }
                 
              }
     
              function getResponse(){
                 let radio_elements = document.getElementsByName("choice");
                 let selectedAnswer;
                 for(i = 0; i < radio_elements.length; i++){
                    if(radio_elements[i].checked){
                       selectedAnswer = radio_elements[i];
                       break;
                    }
                 }
                 return selectedAnswer;
              }
     
              /*
                 set the data of the card
     
                 get card question element
                 set it's inner html to that of {triviaQuestion}
                 get all input elements grouped under choice
                 get all input_labels
                 for i = 0 to input_elements.length
                    set the value property of the input_element[i] to that of choice[i]
                    set the innerHTML property of the input_label_element[i] to that of choice[i]
              */
     
              function setCardData(trivia){
                 let card_question_element = document.getElementsByClassName("card-question")[0];
                 card_question_element.innerHTML = trivia.question;
     
                 let input_elements = document.getElementsByName("choice");
                 let input_labels = document.getElementsByTagName("label");
                 for(i = 0; i < input_elements.length; i++){
                    input_elements[i].value = trivia.allAnswers[i];
                    input_labels[i].innerHTML = trivia.allAnswers[i];
                 }
              }