/* eslint-disable no-undef */
const todoList = require("../todo");

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);

const { all, add, dueToday } = todoList();

describe("TodoList Test Suite", () => {
  test("should retreive due today items", () => {
    dueToday();
    const duetodayitems = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: today,
    });
    dueToday();
    expect(all.length).toBe(duetodayitems + 1);
  });
});
