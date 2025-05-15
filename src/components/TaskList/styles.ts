import { styled } from "@stitches/react";

export const TaskListContainer = styled('main', {
    maxWidth: 736,
    marginTop: '2.5rem',
    marginInline: 'auto',

    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    paddingBottom: '2.5rem',

    
    '@media(max-width: 800px)': {

        paddingInline: '2rem'
    }
})

export const TaskListHeader = styled('div', {

    'p:first-child': {
        fontSize: '0.875rem',
        fontWeight: 'bold',
        color: '#4EA8DE'
    },

    'p:last-child': {
        fontSize: '0.875rem',
        fontWeight: 'bold',
        color: '#8284FA'
    },

    span: {
        borderRadius: '9999px',
        padding: '0.125rem 0.5rem',
        backgroundColor: '#333333',
        color: '#D9D9D9',
        marginLeft: '0.5rem'
    },

    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'

})


export const TaskListFallback = styled('div', {

    borderTop: '1px solid #333333',
    padding: '4rem 1.5rem',

    p: {
        fontSize: '1rem',
        lineHeight: '140%',
        color: '#808080',
        textAlign: 'center'
    },

    svg: {
        color: '#333333'
    },

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem'

})

export const TaskItemContainer = styled('div', {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',

    
    
})

export const TaskItem = styled('div', {

    height: '4.5rem',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderRadius: '0.5rem',
    border: '1px solid #333333',
    backgroundColor: '#262626',
    padding: '1rem',



    'button:first-child': {
        all: 'unset',
        borderRadius: '9999px',
        width: '1.5rem',
        height: '1.5rem',  
        boxSizing: 'border-box',
        cursor: 'pointer',

        transition: '0.2s ease-out',
        
    },

    'button:last-child' : {
        all: 'unset',
        width: '1.5rem',
        height: '1.5rem',   
        cursor: 'pointer', 

        '&:hover': {
            svg: {
                color: '#D9D9D9',  
            }
        },


        svg: {
            color: '#808080'
        }

    },

    p: {
        fontSize: '0.875rem',
        color: '#F2F2F2',
        lineHeight: '140%',
    },

    variants: {
        isComplete: {

            true: {
                p: {
                    textDecoration: 'line-through',
                    color: '#808080'
                },

                'button:first-child': {
                    border: '2px solid  #5E60CE',
                    backgroundColor: '#5E60CE',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#F2F2F2',

                    '&:hover': {
                        backgroundColor: '#8284FA',
                        border: '2px solid  #8284FA',
                    },
     
                },

                backgroundColor: '#262626'
               
            },

            false: {
                'button:first-child': {
                    border: '2px solid  #4EA8DE',

                    '&:hover': {
                        backgroundColor: '#4EA8DE',
                    },
                    
                    svg: {
                        visibility: 'hidden'
                    }
                },
            }
        }
    },
    

    defaultVariants: {
        isComplete: 'false'
    }

})