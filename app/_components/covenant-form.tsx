import { redirect } from 'next/navigation'
import { SubmitButton } from "./submit-button"

const covenantList = [
  {
      article: 1,
      content: 'Every Jew, Christian, and non-Muslim in the world must be slaughtered.'
  },
  {
      article: 2,
      content: 'You endorse making homosexuality punishable by jail or death.'
  },
  {
      article: 4,
      content: 'You agree that Iran should use Palestinians as puppets to spread radical jihad and destroy the West.'
  },
  {
      article: 5,
      content: "You support strict Sharia law which bans women from showing their knees, and hair, playing sports in public, not being able to travel without a man's permission."
  },
  {
      article: 6,
      content: "You want a terrorist group that beheads babies and rapes girls to replace the only democracy in the middle east"
  },
]

export async function sumbit(
    prevState: string | undefined,
    formData: FormData,
  ) {
    console.log("🚀 ~ file: covenant-form.tsx:12 ~ formData:", formData)
    try {
    //   await signIn('credentials', Object.fromEntries(formData));
    } catch (error) {
    //   if ((error as Error).message.includes('CredentialsSignin')) {
    //     return 'CredentialSignin';
    //   }
      throw error;
    }
  }
  
type Props = {}

export default function CovenantForm({}: Props) {

    async function submitHandler(formData: FormData) {
    'use server'
     console.log("🚀 ~ file: covenant-form.tsx:13 ~ create ~ FormData:", formData)
     console.log("🚀 ~ file: covenant-form.tsx:13 ~ create ~ FormData:", formData.getAll('allah'))
     console.log("🚀 ~ file: covenant-form.tsx:13 ~ create ~ FormData:", formData.getAll('data'))
     console.log("🚀 ~ file: covenant-form.tsx:13 ~ create ~ FormData:", formData.getAll('blame-radio'))
     
     const petition = formData.getAll("allah");
     const blame = formData.getAll("blame");
     const personalData = formData.getAll("data");
        // mutate data
        // revalidate cache

      redirect('/confetti')
    }

  return (
    <form action={submitHandler} className="flex flex-col items-center pb-4">
      <ul className="mb-6">
        {covenantList.map((item, index) => {
            return (
                <li key={item.article} className="w-full flex">
                        <div className="mr-6">
                        <input 
                            id={item.content.substring(0, 7) + index} 
                            name="allah"
                            type="checkbox" 
                            value={item.content} 
                            />
                        </div>
                        <div className="">
                        <label
                            htmlFor={item.content.substring(0, 7) + index}
                            >
                            {item.content}
                        </label>
                        </div>
                </li>
            )
        })}
      </ul>
      <div className='w-full grid grid-cols-2 p-2 mb-4 border-b-2 border-[#08993f]'>
        <p className='pb-2 w-full col-span-2'>A Muslim Jihadists stabbed Irish children in Dublin flag. Who is to blame? <span role="img" aria-label="palestine flag">🇵🇸</span></p>
        <div className="flex items-center mb-4 w-full">
            <input disabled id="Jihadists" type="radio" value="jihadists" name="blame-radio" className="radio-input"/>
            <label htmlFor="Jihadists" className="radio-label">Jihadists<span role="img" aria-label="Jihadist">🥷🏿</span></label>
        </div>
        <div className="flex items-center mb-4 w-full">
            <input id="nife" type="radio" value="nife" name="blame-radio" className="radio-input"/>
            <label htmlFor="nife" className="radio-label">The nife<span role="img" aria-label="dagger">🗡️</span></label>
        </div>
        <div className="flex items-center mb-4 w-full">
            <input id="irish" type="radio" value="irish" name="blame-radio" className="radio-input"/>
            <label htmlFor="irish" className="radio-label">The irish<span role="img" aria-label="shamrock">☘️</span></label>
        </div>
        <div className="flex items-center mb-4 w-full">
            <input id="israel" type="radio" value="israel" name="blame-radio" className="radio-input"/>
            <label htmlFor="israel" className="radio-label">Israel Nazi Zionists <span role="img" aria-label="israel flag">🇮🇱</span></label>
        </div>
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-4">
        <div>
            <label htmlFor="first_name" className="label">First name</label>
            <input type="text" id="first_name" className="custom-input" placeholder="Bilal" name="data" required/>
        </div>
        <div>
            <label htmlFor="last_name" className="label">Last name</label>
            <input type="text" id="last_name" className="custom-input" placeholder="Skaf" name="data" required/>
        </div>
        <div>
            <label htmlFor="adress" className="label">Adress</label>
            <input type="text" id="adress" className="custom-input" placeholder="Palastine" name="data" required/>
        </div>
        <div>
            <label htmlFor="email" className="label">Email</label>
            <input type="email" id="email" className="custom-input" placeholder="hamas@freedomfighters.com" name="data" 
            required/>
        </div>
      </div>
        <div>
          <SubmitButton/>
        </div>
    </form>
  )
}

