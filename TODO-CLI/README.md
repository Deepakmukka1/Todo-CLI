# Instructions to use

### 1. Help

Use the `help` command to see the usage

```
$ ./todo help
Usage :-
$ ./todo add "todo item"  # Add a new todo
$ ./todo ls               # Show remaining todos
$ ./todo del NUMBER       # Delete a todo
$ ./todo done NUMBER      # Complete a todo
$ ./todo help             # Show usage
$ ./todo report           # Statistics
```

### 2. List all pending todos

Use the `ls` command to see all the todos that are not yet complete.

```
$ ./todo ls

```

### 3. Add a new todo

Use the `add` command followed by the item to add an item to the todo.

```
$ ./todo add "the thing i need to do"

```

### 4. Delete a todo item

Use the `del` command to remove a todo item by its number.

```
$ ./todo del 3
Deleted todo #3
```

### 5. Mark a todo item as completed

Use the `done` command to mark a todo item as completed by its number.

```
$ ./todo done 1
Marked todo #1 as done.
```

### 6. Generate a report

Use the `report` command to see the latest tally of pending and completed todos.

```
$ ./todo report
dd/mm/yyyy Pending : 1 Completed : 4
```
