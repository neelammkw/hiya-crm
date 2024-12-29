import { ProductLine, Invoice } from './types'

export const initialProductLine: ProductLine = {
  description: '',
  quantity: '1',
  rate: '0.00',
}

export const initialInvoice: Invoice = {
  logo: "",
  logoWidth: 100,
  title: 'INVOICE',
  companyName: 'HIYA ENTERPRISE',
  name: '',
  companyAddress: '58, Raneshwarnagar Sociry,',
  companyAddress2: 'ambedkarnagar, Samta, Vadodara',
  companyCountry: 'India',
  email: 'hiyaenterprise62@gmail.com',
  phone: '9687610079',
  billTo: 'Bill To:',
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  clientCountry: 'India',
  invoiceTitleLabel: 'Invoice#',
  invoiceTitle: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Rate',
  productLineQuantityAmount: 'Amount',
  productLines: [
    {
      description: 'Brochure Design',
      quantity: '2',
      rate: '100.00',
    },
    { ...initialProductLine },
    { ...initialProductLine },
  ],
  subTotalLabel: 'Sub Total',
  taxLabel: 'Sale Tax (5%)',
  totalLabel: 'TOTAL',
  currency: '₹',
  notesLabel: 'Notes',
  notes: 'Thank you for visiting us! Here is the estimate, made for you. If you have any questions, please feel free to reach us.',
  data: `HIYA ENTERPRISE\nAccount No: 099120100000204\nIFSC Code: TJSB0000099`,
  termLabel: 'Terms',
  term: 'Please make the payment by the due date.',
}