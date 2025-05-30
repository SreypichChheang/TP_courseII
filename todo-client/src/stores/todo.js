import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
    loading: false,
    error: null,
  }),
  getters: {
    countTodos: (state) => state.todos.filter(todo => !todo.completedAt).length,
    completedTodos: (state) => state.todos.filter(todo => todo.completedAt),
    pendingTodos: (state) => state.todos.filter(todo => !todo.completedAt),
  },
  actions: {
    async fetchTodos() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get("http://localhost:3100/tasks");
        this.todos = response.data;
      } catch (error) {
        console.error("Failed to fetch todos:", error);
        this.error = "Failed to load tasks";
      } finally {
        this.loading = false;
      }
    },
    
    async toggleStatus(id) {
      try {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
          if (todo.completedAt) {
            // If already completed, update to uncompleted
            const response = await axios.patch(`http://localhost:3100/tasks/${id}/pending`, {
              completedAt: null
            });
            const index = this.todos.findIndex(t => t.id === id);
            if (index >= 0) {
              this.todos[index] = response.data;
            }
          } else {
            // If not completed, mark as done
            const response = await axios.patch(`http://localhost:3100/tasks/${id}/done`);
            const index = this.todos.findIndex(t => t.id === id);
            if (index >= 0) {
              this.todos[index] = response.data;
            }
          }
        }
      } catch (error) {
        console.error("Failed to toggle task status:", error);
        this.error = "Failed to toggle task status";
      }
    },
    
    async addTodo(todoName) {
      try {
        // First we need to get a user ID - Assuming user ID 1 exists from earlier tests
        const userId = 1;
        
        const response = await axios.post("http://localhost:3100/tasks", {
          name: todoName,
          description: "description",
          user: userId
        });
        
        this.todos.push(response.data);
        this.error = null; // Clear any previous errors
      } catch (error) {
        console.error("Failed to add todo:", error);
        this.error = "Failed to add task";
      }
    },
    
    async clearAll() {
      // Since this would require deleting each task individually through the API,
      // we'll need to loop through each task
      try {
        this.loading = true;
        const deletePromises = this.todos.map(todo => 
          axios.delete(`http://localhost:3100/tasks/${todo.id}`)
        );
        await Promise.all(deletePromises);
        this.todos = [];
        this.error = null; // Clear any previous errors
      } catch (error) {
        console.error("Failed to clear all todos:", error);
        this.error = "Failed to clear all tasks";
      } finally {
        this.loading = false;
      }
    },
    
    async deleteTodo(id) {
      try {
        await axios.delete(`http://localhost:3100/tasks/${id}`);
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.error = null; // Clear any previous errors
      } catch (error) {
        console.error("Failed to delete todo:", error);
        this.error = "Failed to delete task";
      }
    },

    // Clear error method
    clearError() {
      this.error = null;
    }
  },
});