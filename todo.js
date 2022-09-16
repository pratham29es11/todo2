/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };
  const overdue = () => {
    return all.filter(
      (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };
  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    return all.filter(
      (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };
  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    return all.filter(
      (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    return list.map(
      (item) =>
        `${item.completed ? "[x]" : "[ ]"} ${item.title} ${
          item.dueDate === new Date().toLocaleDateString("en-CA")
            ? `${item.completed}`
            : `${item.dueDate} ${item.completed}`
        }`
    );
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
