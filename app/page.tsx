import CovenantForm from './_components/covenant-form'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <h1 className="custom-header">Terms & Conditions</h1>
      <p className="custom-header2">By supporting Hamas and freeing palestine you agree to the following:</p>
      <CovenantForm/>
    </main>
  )
}
