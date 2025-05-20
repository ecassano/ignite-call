import { styled, Box } from '@ignite-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '$2',
  marginTop: '$4',
  padding: '$4',
  borderRadius: 8,
  boxSizing: 'border-box',
  border: '4px solid $gray800',
  backgroundColor: '$gray900',

  '@media(max-width: 600px)': {
    gridTemplateColumns: '1fr',
  },
})

export const FormAnnotation = styled('div', {
  color: '#f75a68',
})
