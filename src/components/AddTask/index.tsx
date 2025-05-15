import { PlusCircle } from "phosphor-react";
import { AddTaskButton, AddTaskContainer, AddTaskForm, AddTaskInput, AddTaskInputContainer } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from 'zod'

type AddTaskProps = {

    onAddtask: (data: string) => void
}

const AddTaskFormSchema = z.object({
    taskDescription: z.string().min(1)
})

type AddTaskFormProps = z.infer<typeof AddTaskFormSchema>

export function AddTask({onAddtask}: AddTaskProps){

    const {register, handleSubmit, formState: {isSubmitting}, reset, setFocus} = useForm<AddTaskFormProps>({
        resolver: zodResolver(AddTaskFormSchema)
    })

    function handleOAddtask(data: AddTaskFormProps){

        onAddtask(data.taskDescription)

        reset()
        setFocus('taskDescription')
    }


    return (
        <AddTaskContainer>
        <AddTaskForm onSubmit={handleSubmit(handleOAddtask)}>
            <AddTaskInputContainer>
            <AddTaskInput autoComplete="off" {...register('taskDescription')} placeholder="Adicione uma nova tarefa" />
            </AddTaskInputContainer>
            <AddTaskButton disabled={isSubmitting} type="submit">
                Criar
                <PlusCircle weight="bold" size={16}/>
            </AddTaskButton>
        </AddTaskForm>
        </AddTaskContainer>
    )
}