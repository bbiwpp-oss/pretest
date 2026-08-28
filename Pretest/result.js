// ===========================
// แสดงคะแนน
// ===========================

const score = localStorage.getItem("score") || 0;

document.getElementById("score").textContent =
score + " / 10";

// ===========================
// แสดงเวลา
// ===========================

const time = localStorage.getItem("time") || "00:00";

document.getElementById("time").textContent = time;

const message = document.getElementById("message");

if(score >= 8){

    message.innerHTML =
    "🎉 เยี่ยมมาก! พร้อมเข้าสู่บทเรียนกันเลย";

}
else if(score >= 5){

    message.innerHTML =
    "😊 ทำได้ดีมาก มาเรียนรู้เพิ่มเติมในบทเรียนกันนะ";

}
else{

    message.innerHTML =
    "💪 ไม่เป็นไรนะ มาเรียนรู้ไปพร้อมกันในบทเรียน";

}

// ===========================
// ปุ่มไปหน้าหลัก
// ===========================

const lessonURL =
"https://sites.google.com/view/ชื่อเว็บของเธอ/lesson";

function goHome(){

    window.location.href = lessonURL;

}