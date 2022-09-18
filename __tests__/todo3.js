/* eslint-disable no-undef */
const todoList = require("../todo");

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();

const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);

const { all, add, overdue } = todoList();

describe("TodoList Test Suite", () => {
  test("should retreive overdue items", () => {
    overdue();
    const overDueitems = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: yesterday,
    });
    overdue();
    expect(all.length).toBe(overDueitems + 1);
  });
});
