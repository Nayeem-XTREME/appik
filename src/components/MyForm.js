import React from 'react'
import styled from 'styled-components'

import { Text } from "."
import { Button } from '../styles/MyStyles'
import theme from '../styles/theme'

const Form = styled.form`
  overflow: hidden;

  background-color: white;
  border-radius: 6px;
  padding: 60px 91px;

  @media only screen and (max-width: ${theme.breakpoints.lg}) {
    padding: 60px 60px;
    margin-bottom: 70px;
  }

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    padding: 30px 30px;
    margin-bottom: 50px;
  }
`

const Input = styled.input`
  width: 100%;
  margin-bottom: 22px;
  padding: 12px 0;
  border: none;
  border-bottom: 1px solid #D2D4D2;
  outline: none;
  background-color: transparent;

  font-family: 'Roboto', 'Montserrat', sans-serif;
  font-size: 14px;
  color: ${theme.colors.defaultText};
`

const Textarea = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  display: block;
  margin-bottom: 38px;
  padding: 12px 0;
  border: none;
  border-bottom: 1px solid #D2D4D2;
  outline: none;
  background-color: transparent;

  font-family: 'Roboto', 'Montserrat', sans-serif;
  font-size: 14px;
  color: ${theme.colors.defaultText};
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
