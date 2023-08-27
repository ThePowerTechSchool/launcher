import CheckIcon from '../icons/check-icon'
import FormFieldLabel from './form-field-label'
import FormFieldWraper from './form-field-wraper'

export default function FormFieldTextVariant() {
  return (
    <FormFieldWraper>
      <FormFieldLabel htmlFor='project-name'>¿Cómo quieres llamar a tu proyecto?</FormFieldLabel>
      <input
        className='bg-transparent border-b border-white w-full text-[20px] max-w line-clamp-[28px] font-sans outline-none'
        maxLength={32}
        tabIndex={0}
        placeholder='Ej: Mi proyecto'
        type='text'
        id='project-name'
        name='project-name'
      />
      <button className='self-start flex gap-2 rounded-[4px] items-center px-[14px] py-[6px] bg-[#0445af] font-bold shadow-[rgba(0, 0, 0, 0.1) 0px 3px 12px 0px;] text-sm font-sans'>
        OK <CheckIcon className='fill-white' />
      </button>
    </FormFieldWraper>
  )
}
