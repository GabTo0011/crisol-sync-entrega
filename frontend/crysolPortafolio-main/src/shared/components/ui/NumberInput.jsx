import Input from './Input'

const NumberInput = ({ min = 0, step = 1, ...props }) => {
  return <Input type="number" min={min} step={step} {...props} />
}

export default NumberInput
