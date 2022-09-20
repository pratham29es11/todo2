/* eslint-disable no-undef */
const todoList = require("../todo");

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const today = formattedDate(dateToday);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("TodoList Test Suite", () => {
  beforeAll(() => {
    add({
      title: "got to gym",
      completed: false,
      dueDate: today,
    });
    add({
      title: "pay insurance",
      completed: false,
      dueDate: yesterday,
    });
    add({
      title: "attend meeting",
      completed: false,
      dueDate: tomorrow,
    });
  });

  // test for add

  test("Should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "go to movie",
      completed: false,
      dueDate: today,
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  // test for markAsComplete

  test("should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  // test for overdue

  test("should retreive overdue items", () => {
    const overDueitems = overdue().length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: yesterday,
    });
    expect(overdue().length).toBe(overDueitems + 1);
  });

  // test for dueToday

  test("should retreive due today items", () => {
    const duetodayitems = dueToday().length;
    add({
      title: "make meat",
      completed: false,
      dueDate: today,
    });
    expect(dueToday().length).toBe(duetodayitems + 1);
  });

  // test for dueLater

  test("should retreive due today items", () => {
    const duelateritems = dueLater().length;
    add({
      title: "car servicing",
      completed: false,
      dueDate: tomorrow,
    });
    expect(dueLater().length).toBe(duelateritems + 1);
  });
});
