import { FC, memo } from 'react'
import { Formik } from 'formik'
import Button from '../../../components/Button'
import {
  Container,
  Form,
  FormContent,
  Input,
  InputController,
  InputError,
  Label,
  Link,
} from './styles'
import { InitialValues, ValidationLoginSchema } from './constants'
import useLogic from './logic'

const Login: FC = () => {
  const { handleOnSubmit } = useLogic()

  return (
    <Container>
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationLoginSchema}
        onSubmit={handleOnSubmit}
      >
        {({ errors, handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormContent>
              <InputController>
                <Label>Email</Label>
                <Input type="email" name="email" onChange={handleChange} />
                {errors?.email && <InputError>{errors.email}</InputError>}
              </InputController>
              <InputController>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
                {errors?.password && <InputError>{errors.password}</InputError>}
              </InputController>
              <Button type="submit">Log in</Button>
              <Link to="/signup">Crear cuenta</Link>
            </FormContent>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default memo(Login)
