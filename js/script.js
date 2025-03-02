let completedTaskCount = parseInt(completedTask.innerText);
let taskCount = parseInt(cartCount.innerText);

for (let completedBtn of allCompletedBtn) {
  completedBtn.addEventListener("click", function (e) {
    if (e.target === completedBtn) {
      completedTaskCount += 1;
      taskCount--;
      completedTask.innerText = completedTaskCount;
      cartCount.innerText = String(taskCount).padStart(2, "0");
      completedBtn.setAttribute("disabled", true);

      const task =
        completedBtn.parentNode.parentNode.childNodes[1].childNodes[3]
          .innerText;

      const massage = document.createElement("div");
      massage.className = "bg-gray-100 p-4 rounded-lg";
      massage.innerHTML = `
        <p class="text-lg">You have Complete ${task} at ${getCurrTime()}</p>
        `;
      activityMassagesContainer.appendChild(massage);
      alert("Board updated Successfully!");
      if (taskCount === 0) {
        alert("Congrates!! you have succesfully completed all the task.");
      }
    }
  });
}

function getCurrTime() {
  const today = new Date();
  let am_pm = "AM";
  let hour = today.getHours();
  const minutes = today.getMinutes();
  const sec = today.getSeconds();
  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  const currentTime = `${hour}:${minutes}:${sec} ${am_pm}`;
  return currentTime;
}

function getTodayDate() {
  const today = new Date();
  const day = today.toLocaleDateString("en-US", { weekday: "short" });
  const month = today.toLocaleDateString("en-US", { month: "short" });
  const date = today.getDate();
  const year = today.getFullYear();
  return `${day}, ${month} ${date}  ${year}`;
}
todayDate.innerText = getTodayDate();

clearBtn.addEventListener("click", function () {
  activityMassagesContainer.innerHTML = "";
});

themeColorBtn.addEventListener("click", function () {
  const random = Math.floor(Math.random() * 16777215);
  const convertedToHexColor = "#" + random.toString(16).padStart(6, "0");
  body.style.backgroundColor = convertedToHexColor;
});

blogPageLinkerBtn.addEventListener("click", function () {
  console.log("clicked");
  window.location.href = "blog.html";
});
