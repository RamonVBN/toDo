import { Check, ClipboardText, Trash } from "phosphor-react";
import { TaskItem, TaskItemContainer, TaskListContainer, TaskListFallback, TaskListHeader } from "./styles";
import type { TasksProps } from "../../App";

type TaskListProps = {

    tasks: TasksProps[]
    onRemoveTasks: (taskDescription: string) =>  void
    onUpdateTasks: (taskDescription: string) =>  void
}


export function TaskList({tasks, onRemoveTasks, onUpdateTasks}: TaskListProps) {



    const tasksCompleteds: number = tasks.reduce((acc, currentValue) => {

        if (currentValue.isComplete) {
            
            return acc += 1
        }

        return acc

    }, 0)
    

    return (
        <TaskListContainer>
            <TaskListHeader>
                <p>
                    Tarefas criadas
                    <span>{tasks.length}</span>
                </p>
                <p>
                    Concluídas
                    <span>{tasksCompleteds >= 1? `${tasksCompleteds} de ${tasks.length}`: `0`}</span>
                </p>
            </TaskListHeader>

                {
                    tasks.length >= 1 ? (
                    <TaskItemContainer>
                        {
                            tasks.map((task, i) => {
                                return (
                                <TaskItem isComplete={task.isComplete} key={i} >
                                    <button type="button" onClick={() => onUpdateTasks(task.description) }>
                                    {
                                        task.isComplete && <Check weight="bold" size={16} />
                                    }
                                    </button>
                                    <p>{task.description}</p>
                                    <button type="button" onClick={() => onRemoveTasks(task.description)}>
                                        <Trash size={24} />
                                    </button>
                                </TaskItem>
                                )
                            })
                        }
                    </TaskItemContainer>
                ):
                <TaskListFallback>
                    <ClipboardText size={56}/>
                    <p><strong>Você ainda não tem tarefas cadastradas</strong> <br />
                    Crie tarefas e organize seus itens a fazer</p>
                </TaskListFallback>
                }

                

        </TaskListContainer>
    )
}