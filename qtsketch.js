// var direction, speed;
let m1 = document.getElementById("motor1");
let m2 = document.getElementById("motor2");
let state = "stop";
let laststate = "stop";

document.addEventListener("keypress", keyPressed);
document.addEventListener("keyup", keyReleased);

var el = document.getElementById("up");
el.addEventListener(
  "touchstart",
  () => {
    state = "forward";
  },
  false
);

el.addEventListener(
  "mouseover",
  () => {
    state = "forward";
  },
  false
);

el.addEventListener(
  "touchend",
  () => {
    state = "stop";
  },
  false
);

el.addEventListener(
  "mouseout",
  () => {
    state = "stop";
  },
  false
);
el = document.getElementById("down");
el.addEventListener(
  "touchstart",
  () => {
    state = "backward";
  },
  false
);
el.addEventListener(
  "mouseover",
  () => {
    state = "backward";
  },
  false
);
el.addEventListener(
  "touchend",
  () => {
    state = "stop";
  },
  false
);
el.addEventListener(
  "mouseout",
  () => {
    state = "stop";
  },
  false
);
el = document.getElementById("left");
el.addEventListener(
  "touchstart",
  () => {
    state = "left";
  },
  false
);
el.addEventListener(
  "mouseover",
  () => {
    state = "left";
  },
  false
);
el.addEventListener(
  "touchend",
  () => {
    state = "stop";
  },
  false
);
el.addEventListener(
  "mouseout",
  () => {
    state = "stop";
  },
  false
);

el = document.getElementById("right");
el.addEventListener(
  "touchstart",
  () => {
    state = "right";
  },
  false
);
el.addEventListener(
  "mouseover",
  () => {
    state = "right";
  },
  false
);
el.addEventListener(
  "touchend",
  () => {
    state = "stop";
  },
  false
);

el.addEventListener(
  "mouseout",
  () => {
    state = "stop";
  },
  false
);
el = document.getElementById("stop");
el.addEventListener(
  "touchstart",
  () => {
    state = "stop";
  },
  false
);
el.addEventListener(
  "touchend",
  () => {
    state = "stop";
  },
  false
);

el.addEventListener(
  "mouseover",
  () => {
    state = "stop";
  },
  false
);

function handleState() {
  if (laststate !== state) {
    if (state === "forward") {
      forward();
    } else if (state === "stop") {
      stop();
    } else if (state === "backward") {
      backward();
    } else if (state === "left") {
      left();
    } else if (state === "right") {
      right();
    }

    laststate = state;
  }
}

setInterval(handleState, 120);

function forward() {
  console.log("forward");
  m1.run("clockwise", 120);
  sleep(20);
  m2.run("clockwise", 120);
}

function backward() {
  console.log("backward");
  m1.run("anticlockwise", 120);
  sleep(20);
  m2.run("anticlockwise", 120);
}

function right() {
  console.log("right");
  m1.run("clockwise", 120);
  sleep(20);
  m2.run("anticlockwise", 120);
}

function left() {
  console.log("left");
  m1.run("anticlockwise", 120);
  sleep(20);
  m2.run("clockwise", 120);
}

function stop() {
  //sleep(250);

  console.log("stop");
  m1.run("clockwise", 0);
  //sleep(250);
  sleep(20);

  m2.run("clockwise", 0);

  //sleep(250);
}

function keyPressed(event) {
  if (event.code === "KeyA") {
    state = "left";
  } else if (event.code === "KeyD") {
    state = "right";
  } else if (event.code === "KeyW") {
    state = "forward";
    // forward();
  } else if (event.code === "KeyS") {
    state = "backward";
  }
  // console.log(event);
  console.log(state);
}

function keyReleased(event) {
  if (
    event.code === "KeyA" ||
    event.code === "KeyD" ||
    event.code === "KeyW" ||
    event.code === "KeyS"
  ) {
    //   console.log("stop");
    state = "stop";
    //stop();
  }
  console.log(state);
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
