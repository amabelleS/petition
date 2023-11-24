import Link from "next/link";
import PracticlesBG from "../_components/particles/PracticlesBG";

export default function ConfettiPage() {
    return (
        <main className="grid h-screen place-items-center p-4">
            <PracticlesBG />
            {/* <h2 className="custom-header">Confetti Page</h2> */}
            <div className="text-center">
                {/* <p>Your personal data will be forwarded to the terror department in the F.B.I.</p> */}
                <p className="font-bold text-2xl capitalize text-[#08993f] bg-gray-800 border border-gray-900 rounded-lg p-2 content-center">For more information about hamas & donations please visit <span className="text-[#880808]">
                    <Link href='https://www.hamas.com'>
                        Hamas website
                    </Link>
                    </span></p>
            </div>
        </main>
    )
  }