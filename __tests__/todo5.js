/* eslint-disable no-undef */
const todoList = require("../todo");

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

const { all, add, dueLater } = todoList();

describe("TodoList Test Suite", () => {
  test("should retreive due today items", () => {
    dueLater();
    const duelateritems = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: tomorrow,
    });
    dueLater();
    expect(all.length).toBe(duelateritems + 1);
  });
});
