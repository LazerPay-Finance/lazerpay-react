export type PaymentProps = {
  publicKey: string
  customerName?: string
  customerEmail: string
  currency: string
  amount: number | string
  businessLogo?: string
  reference?: string
  acceptPartialPayment?: boolean
  paymentLinkId?: string
  paymentButtonId?: string
  onError: (event: string) => void
  onSuccess: (event: string) => void
  onClose: () => void
}
