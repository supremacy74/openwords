import FormItemInterface from '@/interfaces/FormItemInterface'

export default interface FormInterface {
    items: Array<FormItemInterface>
    buttonText: string
}
