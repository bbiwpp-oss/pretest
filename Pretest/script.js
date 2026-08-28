const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzFDjvVyxmArAkoRX27WOfJCjHcDQmlMaI5nQ6Ev-rlzi4awL7ooGG-pUdKD2t7lk6tSA/exec";


// ========================================
// ข้อสอบ 15 ข้อ
// ========================================

const questions = [

    // ==============================
    // ข้อ 1-10 : พิมพ์คำตอบ
    // ==============================

    {
        number: "ข้อที่ 1 / 15",
        title: 'จงหาปุ่ม <span>"ร"</span> บนแป้นพิมพ์',
        subtitle: "ค้นหาปุ่ม แล้วพิมพ์ตัวอักษรลงในช่องคำตอบ",
        image: "images/keyboard_q1.png",
        type: "text",
        correct: "ร"
    },

    {
        number: "ข้อที่ 2 / 15",
        title: 'จงหาปุ่ม <span>"ห"</span> บนแป้นพิมพ์',
        subtitle: "ค้นหาปุ่ม แล้วพิมพ์ตัวอักษรลงในช่องคำตอบ",
        image: "images/keyboard_q2.png",
        type: "text",
        correct: "ห"
    },

    {
        number: "ข้อที่ 3 / 15",
        title: 'จงหาปุ่ม <span>"ท"</span> บนแป้นพิมพ์',
        subtitle: "ค้นหาปุ่ม แล้วพิมพ์ตัวอักษรลงในช่องคำตอบ",
        image: "images/keyboard_q3.png",
        type: "text",
        correct: "ท"
    },

    {
        number: "ข้อที่ 4 / 15",
        title: 'จงหาปุ่ม <span>"ไ"</span> บนแป้นพิมพ์',
        subtitle: "ค้นหาปุ่ม แล้วพิมพ์ตัวอักษรลงในช่องคำตอบ",
        image: "images/keyboard_q4.png",
        type: "text",
        correct: "ไ"
    },

    {
        number: "ข้อที่ 5 / 15",
        title: 'จงหาปุ่ม <span>"่"</span> บนแป้นพิมพ์',
        subtitle: "ค้นหาปุ่ม แล้วพิมพ์ตัวอักษรลงในช่องคำตอบ",
        image: "images/keyboard_q5.png",
        type: "text",
        correct: "่"
    },

    {
        number: "ข้อที่ 6 / 15",
        title: 'จงหาปุ่ม <span>"ต"</span> บนแป้นพิมพ์',
        subtitle: "ค้นหาปุ่ม แล้วพิมพ์ตัวอักษรลงในช่องคำตอบ",
        image: "images/keyboard_q6.png",
        type: "text",
        correct: "ต"
    },

    {
        number: "ข้อที่ 7 / 15",
        title: 'จงหาปุ่ม <span>"น"</span> บนแป้นพิมพ์',
        subtitle: "ค้นหาปุ่ม แล้วพิมพ์ตัวอักษรลงในช่องคำตอบ",
        image: "images/keyboard_q7.png",
        type: "text",
        correct: "น"
    },

    {
        number: "ข้อที่ 8 / 15",
        title: 'จงหาปุ่ม <span>"ข"</span> บนแป้นพิมพ์',
        subtitle: "ค้นหาปุ่ม แล้วพิมพ์ตัวอักษรลงในช่องคำตอบ",
        image: "images/keyboard_q8.png",
        type: "text",
        correct: "ข"
    },

    {
        number: "ข้อที่ 9 / 15",
        title: 'จงหาปุ่ม <span>"้"</span> บนแป้นพิมพ์',
        subtitle: "ค้นหาปุ่ม แล้วพิมพ์ตัวอักษรลงในช่องคำตอบ",
        image: "images/keyboard_q9.png",
        type: "text",
        correct: "้"
    },

    {
        number: "ข้อที่ 10 / 15",
        title: 'จงหาปุ่ม <span>"ท"</span> บนแป้นพิมพ์',
        subtitle: "ค้นหาปุ่ม แล้วพิมพ์ตัวอักษรลงในช่องคำตอบ",
        image: "images/keyboard_q10.png",
        type: "text",
        correct: "ท"
    },


    // ==============================
    // ข้อ 11-15 : ช้อยส์ 3 ตัวเลือก
    // ==============================

    {
        number: "ข้อที่ 11 / 15",
        title: "ปุ่มใดใช้ขึ้นบรรทัดใหม่หรือยืนยันคำสั่ง?",
        subtitle: "เลือกคำตอบที่ถูกต้อง",
        image: "images/keyboard_q11.png",
        type: "choice",
        choices: ["Enter", "Shift", "Backspace"],
        correct: "Enter"
    },

    {
        number: "ข้อที่ 12 / 15",
        title: "ปุ่มใดใช้ลบตัวอักษรที่พิมพ์ผิด?",
        subtitle: "เลือกคำตอบที่ถูกต้อง",
        image: "images/keyboard_q12.png",
        type: "choice",
        choices: ["Backspace", "Enter", "Spacebar"],
        correct: "Backspace"
    },

    {
        number: "ข้อที่ 13 / 15",
        title: "ปุ่มใดใช้เว้นวรรคระหว่างคำ?",
        subtitle: "เลือกคำตอบที่ถูกต้อง",
        image: "images/keyboard_q13.png",
        type: "choice",
        choices: ["Spacebar", "Shift", "Enter"],
        correct: "Spacebar"
    },

    {
        number: "ข้อที่ 14 / 15",
        title: "ปุ่มใดใช้พิมพ์ตัวอักษรตัวใหญ่?",
        subtitle: "เลือกคำตอบที่ถูกต้อง",
        image: "images/keyboard_q14.png",
        type: "choice",
        choices: ["Shift", "Enter", "Backspace"],
        correct: "Shift"
    },

    {
        number: "ข้อที่ 15 / 15",
        title: "ปุ่มใดใช้เปิดหรือปิดแป้นตัวเลข?",
        subtitle: "เลือกคำตอบที่ถูกต้อง",
        image: "images/keyboard_q15.png",
        type: "choice",
        choices: ["Num Lock", "Shift", "Enter"],
        correct: "Num Lock"
    }

];


// ========================================
// ตัวแปร
// ========================================

let currentQuestion = 0;
let score = 0;

let time = 300;
let timeUsed = 0;

let timerInterval;
let isAnswering = false;

let selectedChoice = "";


// ========================================
// เรียกองค์ประกอบจาก HTML
// ========================================

const submitBtn = document.querySelector(".submit-btn");
const progressFill = document.querySelector(".progress-fill");
const timerText = document.querySelector(".timer-text");
const popup = document.getElementById("popupMessage");

const answerInput = document.getElementById("answerInput");
const answerArea = document.getElementById("answerArea");
const choiceArea = document.getElementById("choiceArea");


// ========================================
// Popup
// ========================================

function showPopup(text, type) {

    popup.textContent = text;

    popup.className = "popup-message show " + type;

    setTimeout(function () {

        popup.className = "popup-message";

    }, 1000);
}


// ========================================
// โหลดข้อสอบ
// ========================================

function loadQuestion() {

    const q = questions[currentQuestion];

    document.querySelector(".frame-title").textContent = q.number;

    document.querySelector(".question-title").innerHTML = q.title;

    document.querySelector(".question-subtitle").textContent = q.subtitle;

    document.querySelector(".keyboard-image").src = q.image;

    progressFill.style.width =
        ((currentQuestion + 1) / questions.length * 100) + "%";


    // รีเซ็ตคำตอบ
    answerInput.value = "";

    selectedChoice = "";

    answerInput.disabled = false;

    submitBtn.disabled = false;

    isAnswering = false;


    // ========================================
    // ถ้าเป็นข้อพิมพ์คำตอบ
    // ========================================

    if (q.type === "text") {

        answerArea.style.display = "flex";

        choiceArea.style.display = "none";

        answerInput.focus();

    }


    // ========================================
    // ถ้าเป็นข้อช้อยส์
    // ========================================

    if (q.type === "choice") {

        answerArea.style.display = "none";

        choiceArea.style.display = "flex";

        createChoices(q.choices);

    }

}


// ========================================
// สร้างช้อยส์ 3 ตัวเลือก
// ========================================

function createChoices(choices) {

    choiceArea.innerHTML = "";

    choices.forEach(function (choice) {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "choice-btn";

        button.textContent = choice;


        button.addEventListener("click", function () {

            if (isAnswering) {
                return;
            }

            selectedChoice = choice;


            // เอาสถานะเลือกออกจากปุ่มอื่น
            document.querySelectorAll(".choice-btn").forEach(function (btn) {

                btn.classList.remove("selected");

            });


            // ทำเครื่องหมายปุ่มที่เลือก
            button.classList.add("selected");

        });


        choiceArea.appendChild(button);

    });

}


// ========================================
// Timer นับถอยหลัง 5 นาที
// ========================================

function updateTimer() {

    const minute = Math.floor(time / 60);

    const second = time % 60;

    timerText.textContent =
        String(minute).padStart(2, "0") +
        ":" +
        String(second).padStart(2, "0");
}


function startTimer() {

    updateTimer();

    timerInterval = setInterval(function () {

        time--;

        timeUsed++;

        updateTimer();


        if (time <= 0) {

            clearInterval(timerInterval);

            time = 0;

            updateTimer();

            finishQuiz(true);

        }

    }, 1000);
}


// ========================================
// ตรวจคำตอบ
// ========================================

function checkAnswer() {

    if (isAnswering) {
        return;
    }


    const q = questions[currentQuestion];

    let answer = "";


    // ========================================
    // ถ้าเป็นข้อพิมพ์
    // ========================================

    if (q.type === "text") {

        answer = answerInput.value.trim();


        if (answer === "") {

            showPopup("กรุณาพิมพ์คำตอบ", "wrong");

            answerInput.focus();

            return;
        }

    }


    // ========================================
    // ถ้าเป็นข้อช้อยส์
    // ========================================

    if (q.type === "choice") {

        answer = selectedChoice;


        if (answer === "") {

            showPopup("กรุณาเลือกคำตอบ", "wrong");

            return;
        }

    }


    // ========================================
    // ป้องกันการกดซ้ำ
    // ========================================

    isAnswering = true;

    submitBtn.disabled = true;

    answerInput.disabled = true;


    // ========================================
    // ตรวจคำตอบ
    // ========================================

    if (answer === q.correct) {

        score++;

        showPopup("ตอบถูกต้อง", "correct");

    } else {

        showPopup("ตอบไม่ถูกต้อง", "wrong");

    }


    // ========================================
    // ไปข้อถัดไป
    // ========================================

    setTimeout(function () {

        currentQuestion++;


        if (currentQuestion < questions.length) {

            loadQuestion();

        } else {

            finishQuiz(false);

        }

    }, 1000);

}


// ========================================
// แปลงเวลา
// ========================================

function formatTime(seconds) {

    const minute = Math.floor(seconds / 60);

    const second = seconds % 60;

    return String(minute).padStart(2, "0") +
           ":" +
           String(second).padStart(2, "0");
}


// ========================================
// จบแบบทดสอบ
// ========================================

function finishQuiz(timeUp) {

    clearInterval(timerInterval);

    localStorage.setItem("score", score);

    localStorage.setItem(
        "time",
        formatTime(timeUsed)
    );


    fetch(SCRIPT_URL, {

        method: "POST",

        body: JSON.stringify({

            number: localStorage.getItem("studentNo"),

            classroom: localStorage.getItem("studentClass"),

            testType: "ก่อนเรียน",

            score: score,

            time: formatTime(timeUsed)

        })

    }).catch(function (error) {

        console.error("ส่งข้อมูลไม่สำเร็จ:", error);

    });


    if (timeUp) {

        showPopup("หมดเวลา", "wrong");

        setTimeout(function () {

            window.location.href = "result.html";

        }, 1000);

    } else {

        window.location.href = "result.html";

    }

}


// ========================================
// ปุ่มส่งคำตอบ
// ========================================

submitBtn.addEventListener("click", function () {

    checkAnswer();

});


// ========================================
// กด Enter เพื่อส่งคำตอบ
// ========================================

answerInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        event.preventDefault();

        checkAnswer();

    }

});


// ========================================
// เริ่มแบบทดสอบ
// ========================================

loadQuestion();

startTimer();