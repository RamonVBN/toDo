import { useEffect, useState } from "react";
import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { AppContainer } from "./styles";


export type TasksProps = {
  description: string,
  isComplete: boolean
}

export function App() {

  const [tasks, setTasks] = useState<TasksProps[]>([])

   function onAddTask(taskDecription: string){

    const newTask: TasksProps = {description: taskDecription, isComplete: false}

    const tasksCompleted =  tasks.filter((task) => task.isComplete)

    const tasksIncompleted = tasks.filter((task) => !task.isComplete)

    tasksIncompleted.unshift(newTask)

    setTasks([...tasksIncompleted, ...tasksCompleted])

  }

  function onRemoveTasks(taskDecription: string){
   

    const indexToRemove = tasks.reverse().findIndex((task) => task.description === taskDecription)

    if (indexToRemove !== -1) {
      
      const updatedTask = tasks.toSpliced(indexToRemove, 1)

      setTasks(updatedTask)

    }
  }

  function onUpdateTasks(taskDecription: string){

    const indexToUpdate = tasks.findIndex((task) => task.description === taskDecription)

    if (indexToUpdate !== -1) {
      
      tasks[indexToUpdate].isComplete = !tasks[indexToUpdate].isComplete

      const tasksCompleted =  tasks.filter((task) => task.isComplete)

      const tasksIncompleted = tasks.filter((task) => !task.isComplete)

      setTasks([...tasksIncompleted, ...tasksCompleted])

    }
  }

  useEffect(() => {

    const savedTasks = localStorage.getItem('@toDo:tasks')

    if (savedTasks) {
      
      setTasks(JSON.parse(savedTasks))
    }
    
  }, [])

  useEffect(() => {

    setTimeout(() => {
      
      localStorage.setItem('@toDo:tasks', JSON.stringify(tasks))
    }, 100);

  }, [tasks])

  return (
    <>
    <AppContainer>
      <Header/>
      <AddTask onAddtask={onAddTask} />
      <TaskList onUpdateTasks={onUpdateTasks} onRemoveTasks={onRemoveTasks} tasks={tasks}/>
    </AppContainer>
    </>
  )
}
