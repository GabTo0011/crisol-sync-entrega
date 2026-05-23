import Alert from '../../../../shared/components/ui/Alert'

const FacturaCountdownAlert = ({ days }) => {
  if (days > 3) return null

  if (days < 0) {
    return (
      <Alert tone="danger" title="Plazo vencido">
        El periodo legal de 8 dias para aceptar o rechazar esta factura ya expiro.
      </Alert>
    )
  }

  return (
    <Alert tone="warning" title="Plazo legal por vencer">
      Quedan {days} dias para aceptar o rechazar esta factura dentro del plazo legal.
    </Alert>
  )
}

export default FacturaCountdownAlert
