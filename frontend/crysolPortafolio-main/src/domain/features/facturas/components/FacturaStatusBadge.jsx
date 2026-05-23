import Badge from '../../../../shared/components/ui/Badge'

const FacturaStatusBadge = ({ status }) => {
  const labels = {
    pendiente: 'Pendiente',
    aceptada: 'Aceptada',
    rechazada: 'Rechazada',
  }

  return <Badge value={labels[status] || status} />
}

export default FacturaStatusBadge
