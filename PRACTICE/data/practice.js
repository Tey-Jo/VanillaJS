const taeheeInfo = {
    name: "taehee",
    age: 30,
    gender: "male",
};
console.log(taeheeInfo);

function sayHello(potato) {
    console.log("hello!", potato);
}

sayHello("Taehee");
//consol.log는 argument(인자) 를 무한으로 가질수 있다

function sayHello(potato) {
    console.log(`Hello, ${potato}. you are awesome.`);
}

const cal = {
    plus: function(a, b) {
        return a ** b;
    },
};

const plus = cal.plus(100, 50);

console.log(plus);

// html에서 아이디로 타이틀을 주고 자바스크립트에 아래와같이 연결. css에서는 아이디 타입 앞에 #을 붙임

const title = document.getElementById("title");
const title = document.querySelector("title");

console.log(title);

title.innerHTML = "Hi! from JS";

console.dir(title);

//

function handleResize() {
    console.log("I have been resized");
}

window.addEventListener("resize", handleResize);
// 이벤트가 발생할때
window.addEventListener("resize", handleResize());
// 지금당장 호출

//

function handleClick() {
    title.style.color = "blue";
}
// 클릭 이벤트는 한번만 발생함

title.addEventListener("click", handleClick);

//

if (condition) {
    block;
} else {
    block;
}

if (10 > 5) {
    console.log("Hi!");
} else {
    console.log("yoyo!");
}

//

if (20 > 5 && "nicolas" === "nicolas") {
    console.log("YES");
    // &&를 넣으면 둘 다 참이어야 함 AND조건
    // ||를 넣으면 둘중에 하나 OR 조건
} else {
    console.log("no");
}

//
//

const BASE_COLOR = "#333";
const OTHER_COLOR = "#7F8C8D";

function handleClick() {
    if (currentColor === title.style.color) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function handleClick() {
    console.log(title.style.color);
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

//

function handleClick() {
    const currentClass = title.className;
    if (currentClass !== CLICKED_CLASS) {
        title.className(CLICKED_CLASS);
    } else {
        title.className = "";
    }
}

// 이렇게 하면 한번 이벤트가 발생하면 HTML에서 준 클래스가 사라져버림

function handleClick() {
    const currentClass = title.className;
    if (currentClass !== CLICKED_CLASS) {
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}

// 그래서 이렇게 리스트에 넣었다 제거하는 방식으로 해야 HTML 클래스가 유지됨
// 근데 이벤트가 발생하면 currentClass가 바뀌기 때문에 다른방식을 적용해줘야함

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (hasClass !== CLICKED_CLASS) {
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}

// hasClass 는 참 거짓으로 판별함
// hasClass= 이 클래스를 가지고 있으면
// !hasClass= 이 클래스를 가지고 있지 않으면

// 근데 위에 방식은 너무 기니까 이걸 간단히 하면

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}

// toggle은 이 클래스가 있으면 빼고 없으면 넣음