const quiz = [
    {   
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        checkAnswer: function(choice) { return choice === this.answer; }
    },
    {
        question: "What is the most efficient way to complete an assignment due tomorrow?",
        options: [
          "Start a week in advance",
          "Work on it steadily every day",
          "Google 'Assignment PDF' at 11:55 PM",
          "Copy from the class topper and pray"
        ],
        answer: "Google 'Assignment PDF' at 11:55 PM",
        checkAnswer: function(choice) {
          return choice === this.answer;
        }},
      {
        question: "What is the real reason students join group studies?",
        options: [
          "To discuss the syllabus and study effectively",
          "To divide topics and teach each other",
          "To gossip, eat snacks, and panic together",
          "To convince themselves they’re being productive"
        ],
        answer: "To gossip, eat snacks, and panic together",
        checkAnswer: function(choice) {
          return choice === this.answer;
        }
      },
      {
        question: "What is the best response when a professor asks, 'Who did the homework?'",
        options: [
          "Confidently raise your hand (yeah, right!)",
          "Pretend to look for your notebook for 10 minutes",
          "Stare at the floor like it holds all the answers",
          "Act shocked: 'We had homework?'"
        ],
        answer: "Act shocked: 'We had homework?'",
        checkAnswer: function(choice) {
          return choice === this.answer;
        }
      },
      {
        question: "What’s the best way to prepare for an exam?",
        options: [
          "Study daily and revise regularly",
          "Start preparing a week before",
          "Cram everything the night before with caffeine overdose",
          "Just trust your fate and get extra sheets to look serious"
        ],
        answer: "Cram everything the night before with caffeine overdose",
        checkAnswer: function(choice) {
          return choice === this.answer;
        }
      },
      {
        question: "What’s a professor’s favorite way to ruin a student’s happiness?",
        options: [
          "Giving surprise tests on Monday morning",
          "Assigning group projects where you do all the work",
          "Writing cryptic exam questions to test your soul",
          "All of the above (obviously!)"
        ],
        answer: "All of the above (obviously!)",
        checkAnswer: function(choice) {
          return choice === this.answer;
        }
      },
      {
        question: "What is the biggest mystery of college life?",
        options: [
          "Where do missing pens go?",
          "How does attendance always fall below 75%?",
          "Why does WiFi only work when no one needs it?",
          "Why does the topper say, 'Bro, I didn't study,' and still score 99?"
        ],
        answer: "Why does the topper say, 'Bro, I didn't study,' and still score 99?",
        checkAnswer: function(choice) {
          return choice === this.answer;
        }
      }
];
let currentQuestion = 0;
let score = 0;
function loadQuestion() {
    let q = quiz[currentQuestion];
    document.getElementById("question").textContent = q.question;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.textContent = option;
        btn.className = "block w-full b py-3 rounded-[100px]  border border-gray-900 border-shadow transition text-lg font-semibold text-black";
        // g-gradient-to-r from-fuchsia-500 to-cyan-500
        btn.onclick = function() {
            if (q.checkAnswer(option)) {
                score++;
                btn.classList.add("bg-green-500");
            } else {
                btn.classList.add("bg-red-500");
            }
            document.getElementById("score").textContent = `Score: ${score}`;
        };

        optionsDiv.appendChild(btn);
    });
}
function nextQuestion() {
    if (currentQuestion < quiz.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById("question").textContent = "Quiz Completed!";
        document.getElementById("options").innerHTML = "";
    }
}
loadQuestion();
