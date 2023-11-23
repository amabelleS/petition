'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button 
        type="submit" 
        aria-disabled={pending} 
        className='bg-[#08993f] hover:bg-[#880808] text-white font-bold py-2 px-4 rounded items-center'
        >
      Free Palestine
    </button>
  )
}