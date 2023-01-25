import cn from 'classnames'

const classNames = {
  textarea: cn(
    'bg-gray-200',
    'border-2',
    'border-gray-200',
    'rounded',
    'py-2',
    'px-4',
    'text-gray-700',
    'leading-tight',
    'focus:outline-none',
    'focus:bg-white',
    'focus:border-purple-500'
  ),
  input: cn(
    'appearance-none',
    'bg-gray-200',
    'border-2',
    'border-gray-200',
    'rounded',
    'py-2',
    'px-4',
    'text-gray-700',
    'leading-tight',
    'focus:outline-none',
    'focus:bg-white',
    'focus:border-purple-500'
  ),
  header: cn(
    'flex',
    'flex-col',
    'gap-8',
    'text-center',
    'tracking-wider',
    'leading-5',
    'mb-10'
  ),
  button: cn(
    'shadow',
    'focus:shadow-outline',
    'focus:outline-none',
    'text-white',
    'font-bold',
    'py-2',
    'px-4',
    'rounded',
    'bg-purple-500',
    'hover:bg-purple-400'
  ),
  cancelButton: cn(
    'shadow',
    'focus:shadow-outline',
    'focus:outline-none',
    'text-white',
    'font-bold',
    'py-2',
    'px-4',
    'rounded',
    'bg-red-600',
    'hover:bg-red-500'
  ),
}

export default classNames
