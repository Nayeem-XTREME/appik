import React from 'react'
import styled from 'styled-components'

import { Text } from "../../components"
import { Button } from '../../styles/MyStyles'
import theme from '../../styles/theme'

const Form = styled.form`
  overflow: hidden;
`

const Input = styled.input`
  width: 100%;
  margin-bottom: 22.5px;
  padding: 12px 0;
  border: none;
  border-bottom: 1px solid #D2D4D2;
  outline: none;

  font-family: 'Roboto', 'Montserrat', sans-serif;
  font-size: 14px;
`

const Textarea = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  display: block;
  margin-bottom: 37.5px;
  padding: 12px 0;
  border: none;
  border-bottom: 1px solid #D2D4D2;
  outline: none;

  font-family: 'Roboto', 'Montserrat', sans-serif;
  font-size: 14px;
`

export default function MyForm({ title, buttonText }) {
  return (
    <Form>
      <Text variant="h2" mb={43}>{title}</Text>

      <label htmlFor="name">
        <Text variant="p">Name</Text>
      </label>
      <Input type="text" id="name" name="name" required />

      <label htmlFor="email">
        <Text variant="p">Email</Text>
      </label>
      <Input type="email" id="email" name="email" required />

      <label htmlFor="subject">
        <Text variant="p">Subject</Text>
      </label>
      <Input type="text" id="subject" name="subject" required />

      <label htmlFor="message">
        <Text variant="p">Message</Text>
      </label>
      <Textarea type="text" id="message" name="message" required />

      <Button highlight type="submit">{buttonText}</Button>
    </Form>
  )
}
