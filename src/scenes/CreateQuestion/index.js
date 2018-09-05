import React from 'react'
import Container from 'components/Container'
import Card from 'components/Card'
import Field from 'components/Field'
import Input, {TextArea} from 'components/Input'
import Button from 'components/Button'
import RadioGroup from 'components/RadioGroup'


class CreateQuestion extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Container>
        <h1>Elaborar Questões</h1>
        <Card>
            <Field
              id="statement"
              label="Insira o enunciado da questão"
              as={TextArea}
            />
            <Field
              id="alternativeA"
              label="Alternativa A:"
              as={TextArea}
            />
            <Field
              id="alternativeB"
              label="Alternativa B:"
              as={TextArea}
            />
            <Field
              id="alternativeC"
              label="Alternativa C:"
              as={TextArea}
            />
            <Field
              id="alternativeD"
              label="Alternativa D:"
              as={TextArea}
            />
            <Field
              id="comment"
              label="Comentário do Professor:"
              as={TextArea}
            />
            <Field
              id="complementaryMaterial"
              label="Material Complementar"
            />
            <Field
              className="space-stack-l"
              label="Informar qual é a alternativa correta"
              as={RadioGroup}
              name="radio"
              options={[
                { value: 'alternativaA', label: 'A' },
                { value: 'alternativaB', label: 'B' },
                { value: 'alternativaC', label: 'C' },
                { value: 'alternativaD', label: 'D' },
              ]}
            />
            <footer className="flex justify-end">
              <Button>Salvar questão</Button>
            </footer>
        </Card>
      </Container>
    )
  }
}

export default CreateQuestion
