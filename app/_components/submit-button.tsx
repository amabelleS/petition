'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button 
        type="submit" 
        aria-disabled={pending} 
        // className='custom-btn text-green-800'
        // className='flex justify-center w-24 ml-4 bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded'
        className='bg-[#08993f] hover:bg-[#880808] text-white font-bold py-2 px-4 rounded items-center'
        >
      Free Palestine
    </button>
  )
}