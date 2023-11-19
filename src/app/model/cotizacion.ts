export interface Cotizacion {
  client_id: number
  moneda: string
  entidad: string
  price: number
  initial: number
  tipo_tasa: string
  tasa: number
  plazo: number
  perInitial: number
  monto_solicitado: number
  monto_financiar: number
  cuota: number
  seguro_vehicular: number
  seguro_degravamen: number
  tipo_gracia: string
  periodo_gracia: number
  comision: number
  fecha: Date
  tea: number
  tna: number
}

export interface RowCrono {
  position: number
  period: number
  fecha: string
  saldoini: string
  amortization: string
  intereses: string
  seguro_degr: string
  seguro_vehi: string
  saldofini: string
  cuota_mensual: string

}
