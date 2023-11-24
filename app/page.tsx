import Image from 'next/image'
import CovenantForm from './_components/covenant-form'

export default function Home() {
  return (
    <main className="grid h-screen place-items-center p-4">
    {/* <main className="flex min-h-screen flex-col items-center p-4"> */}
      <header className='flex-around flex-col w-full md:flex-row md:gap-4'>
        <Image 
          src='https://www.jewishvirtuallibrary.org/jsource/images/terror/hamaslogo.jpg'
          alt='Hamas logo'
          width={88}
          height={66}
          className='p-2'
        />
        <div className='flex flex-col items-center text-[#08993f] p-2'>
          <h2>HAMAS</h2>
          <h2>حركة المقاومة الإسلامية حماس</h2>
          <h2>Palestinian Islamic Resistance Movement</h2>
        </div>
        <Image 
          src='https://www.hamas.com/wp-content/uploads/2023/11/Flag_of_Hamas.svg_.png'
          alt='Hamas logo'
          width={220}
          height={180}
          className='hidden md:block pb-6'
        />
      </header>
      <h1 className="custom-header">Terms & Conditions</h1>
      <p className="custom-header2">By supporting Hamas and freeing palestine you agree to the following:</p>
      <CovenantForm/>
    </main>
  )
}
