import Image from 'next/image'
import CovenantForm from './_components/covenant-form'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <header className='flex-around flex-col pb-4 w-full md:flex-row md:gap-4'>
        <Image 
          src='https://www.hamas.com/wp-content/uploads/2023/11/Flag_of_Hamas.svg_.png'
          alt='Hamas logo'
          width={220}
          height={180}
          className='pb-8'
        />
        <h1 className="custom-header">Terms & Conditions</h1>
        <div className='flex flex-col items-center'>
          <h2>HAMAS</h2>
          <h2>حركة المقاومة الإسلامية حماس</h2>
          <h2>Palestinian Islamic Resistance Movement</h2>
        </div>
      </header>
     
      <p className="custom-header2">By supporting Hamas and freeing palestine you agree to the following:</p>
      <CovenantForm/>
    </main>
  )
}
