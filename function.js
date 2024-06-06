const menubt = document.getElementById("menu_bt");
const addclass = document.querySelector("header section");
menubt.addEventListener("click", () => {
  addclass.ClassList.toggle("show_menu");
});
