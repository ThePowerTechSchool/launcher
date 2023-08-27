export default function FormFieldLabel({
  htmlFor,
  children
}: {
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label className='block text-[20px] max-w line-clamp-[28px] font-sans' htmlFor={htmlFor}>
      {children}
    </label>
  )
}
