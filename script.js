const inputField = document.querySelector(".input-field textarea"),
  todoLists = document.querySelector(".todoLists"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");

//Biz vazifani qo'shish, o'chirish va tekshirish-belgilash paytida ushbu funktsiyani chaqiramiz
function allTasks() {
  let tasks = document.querySelectorAll(".pending");
  //agar vazifalar uzunligi 0 bo'lsa, kutilayotgan num matn mazmuni yo'q, agar bo'lmasa, kutilayotgan num qiymati vazifa uzunligi bo'ladi
  pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

  let allLists = document.querySelectorAll(".list");
  if (allLists.length > 0) {
    todoLists.style.marginTop = "20px";
    clearButton.style.pointerEvents = "auto";
    return;
  }
  todoLists.style.marginTop = "0px";
  clearButton.style.pointerEvents = "none";
}

//matn maydoniga qiymat qo'yganimizda vazifa qo'shing va Enter tugmasini bosing

inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim();
  // agar keyup ishga tushsa va kiritilgan qiymati length 0 dan katta bo'lsa
  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
          <input type="checkbox" />
          <span class="task">${inputVal}</span>
          <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li>`;

    todoLists.insertAdjacentHTML("beforeend", liTag); // todolist div ichiga li tegini kiritish
    inputField.value = "";
    allTasks();
  }
});
// checkboxni boskanimizda ustiga chizish va olib tashlash
function handleStatus(e) {
  const checkbox = e.querySelector("input"); //checkboxni olish
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}
// o'chirishni belgisini boskanimiza o'chirish
function deleteTask(e) {
  e.parentElement.remove();
  allTasks();
}
// clear button boskanda hammasini o'chirish
clearButton.addEventListener("click", () => {
  todoLists.innerHTML = "";
  allTasks();
});
