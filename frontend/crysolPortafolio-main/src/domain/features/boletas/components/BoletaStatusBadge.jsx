import Badge from '../../../../shared/components/ui/Badge'

const BoletaStatusBadge = ({ status }) => {
  const labels = {
    registrada: 'Registrada',
    anulada: 'Anulada',
  }

  return <Badge value={labels[status] || status} />
}

export default BoletaStatusBadge
