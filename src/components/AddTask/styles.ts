import { styled } from "@stitches/react";


export const AddTaskContainer = styled('div', {

    width: '100%',
    transform: 'translateY(-50%)',

    
    '@media(max-width: 800px)': {

        paddingInline: '2rem'
    }

})

export const AddTaskForm = styled('form', {
    marginInline: 'auto',
    gap: '0.5rem',
    maxWidth: 736,

    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
})

export const AddTaskInputContainer = styled('label', {
    backgroundColor: '#262626',
    maxWidth: 638,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #0D0D0D',

    gridColumn: '1 / 8'
})

export const AddTaskInput = styled('input', {
    all: 'unset',
    color: '#808080',
    paddingLeft: '1rem',
    width: '80%',
    
    '&::placeholder': {
        fontSize: '1rem',
        fontWeight: 'normal',
        lineHeight: '140%',
    }
})

export const AddTaskButton = styled('button', {
    
    all: 'unset',
    backgroundColor: '#1E6F9F',
    color: '#F2F2F2',
    fontWeight: 'bold',
    fontSize: '0.875rem',
    lineHeight: '140%',
    border: 0,
    borderRadius: 8,
    padding: 16,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem',

    cursor: 'pointer',

    transition: '0.1s ease-out',

    '&:hover': {
        backgroundColor: '#4EA8DE'
    },

    svg: {
        backgroundColor: 'inherit',
    }
})