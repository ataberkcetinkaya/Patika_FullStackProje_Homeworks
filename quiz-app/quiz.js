let answersheet = ["D", "D", "D", "D","D", "D", "D", "D","D", "D"]; //cevap anahtari, cevaplari bununla kiyaslayacagiz.

let form = document.querySelector("form");
let info = document.querySelector(".info");

form.addEventListener("submit", e => { //button form elementinin icerisinde, o yuzden form.addEventListener ile submit olarak giriyoruz.
    e.preventDefault()
    
    let point = 0;
    let user_answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value,] //kullanicidan alacagimiz cevaplar, birden fazla olacagiz icin array olacak
                                                                //sorularin degerlerini '.value' ile aliyoruz.

    user_answers.forEach((x, index) => { //index, answersheet'in index'inden geliyor
        if (x === answersheet[index]) {
            point = point + 10;
        }
    })

    //info.textContent = ("Total Points: " + point);  

    if (point === 0) {
        info.style.backgroundColor = "red";
        info.style.color = "white";
        info.textContent = "Failed with " + point + " points";
    }
    if (point === 10) {
        info.style.backgroundColor = "red";
        info.style.color = "white";
        info.textContent = "Failed with " + point + " points";
    }
    if (point === 20) {
        info.style.backgroundColor = "red";
        info.style.color = "white";
        info.textContent = "Failed with " + point + " points";
    }
    if (point === 30) {
        info.style.backgroundColor = "yellow";
        info.style.color = "black";
        info.textContent = "Do more " + point + " points";
    }
    if (point === 40) {
        info.style.backgroundColor = "yellow";
        info.style.color = "black";
        info.textContent = "Do more " + point + " points";
    }
    if (point === 50) {
        info.style.backgroundColor = "yellow";
        info.style.color = "black";
        info.textContent = "Do more " + point + " points";
    }
    if (point === 60) {
        info.style.backgroundColor = "orange";
        info.style.color = "black";
        info.textContent = "Not bad " + point + " points";
    }
    if (point === 70) {
        info.style.backgroundColor = "orange";
        info.style.color = "black";
        info.textContent = "Not bad " + point + " points";
    }
    if (point === 80) {
        info.style.backgroundColor = "green";
        info.style.color = "white";
        info.textContent = "Congrats " + point + " points";
    }
    if (point === 90) {
        info.style.backgroundColor = "green";
        info.style.color = "white";
        info.textContent = "Congrats " + point + " points";
    }
    if (point === 100) {
        info.style.backgroundColor = "green";
        info.style.color = "white";
        info.textContent = "Congrats " + point + " points";
    }
})