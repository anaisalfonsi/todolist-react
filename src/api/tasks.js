import axios from "axios";

export const findAllTasks = () => {
    /* return fetch("https://620a26ee92946600171c5814.mockapi.io/todo"
    ).then((response) => response.json()); */

    return axios.get("https://620a26ee92946600171c5814.mockapi.io/todo")
    .then((response) => response.data);
}

export const createTaskInApi = (task) => {
    /* return fetch("https://620a26ee92946600171c5814.mockapi.io/todo", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json()); */

    return axios
      .post("https://620a26ee92946600171c5814.mockapi.io/todo", task)
      .then((response) => response.data);
}

export const deleteTaskFromApi = (id) => {
    /* return fetch("https://620a26ee92946600171c5814.mockapi.io/todo/" + id, {
      method: "DELETE",
    }); */
    return axios
      .delete("https://620a26ee92946600171c5814.mockapi.io/todo/"+ id);
}

export const toggleTaskInApi = (task) => {
  /* return fetch("https://620a26ee92946600171c5814.mockapi.io/todo/" + task.id, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json()); */

  return axios.put("https://620a26ee92946600171c5814.mockapi.io/todo/" + task.id, task);
}

const TasksApi = {
  create: createTaskInApi,
  delete: deleteTaskFromApi,
  toggle: toggleTaskInApi,
  load: findAllTasks,
};

export default TasksApi;