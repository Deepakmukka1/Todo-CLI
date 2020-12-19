# Todo-CLI

This is a todo Command line Interface program that helps to manage our daily tasks (simple but using command line for todo is something that excited me ☺)

# How to Install

### 1. Make sure node is installed in your device

### 2. git clone this project

```
git clone https://github.com/Deepakmukka1/Todo-CLI.git

```

# Instructions to use

### 1. Help

Use the `help` command to see the usage

```
$ todo help
Usage :-
$ todo add "todo item"  # Add a new todo
$ todo ls               # See remaining todos
$ todo del NUMBER       # Delete a todo
$ todo done NUMBER      # Complete a todo
$ todo help             # See usage
$ todo report           # See the Statistics
```

### 2. List all pending todos

Use the `ls` command to see all the todos that are not yet complete.

```
$ todo ls
```

### 3. Add a new todo

Use the `add` command followed by the item to add an item to the todo.

```
$ todo add "the thing i need to do"

```

### 4. Delete a todo item

Use the `del` command to remove a todo item by its number.

```
$ todo del 3

```

### 5. Mark a todo item as completed

Use the `done` command to mark a todo item as completed by its number.

```
$ todo done 1

```

### 6. Generate a report

Use the `report` command to see the latest tally of pending and completed todos.

```
$ todo report

```
