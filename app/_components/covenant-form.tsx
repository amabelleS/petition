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
     
     formData.getAll("allah");
        // mutate data
        // revalidate cache

      redirect('/confetti')
    }

  return (
    <form action={submitHandler} className="flex flex-col items-center">
      <ul className="mb-6">
        {covenantList.map((item, index) => {
            return (
                <li key={item.artticle} className="w-full flex">
                        <div className="mr-6">
                        <input 
                            id={item.content.substring(0, 7) + index} 
                            name="allah"
                            type="checkbox" 
                            value={item.content} 
                            // className="mr-6"
                            />
                        </div>
                        <div className="">
                        <label 
                            // className="ml-4"
                            htmlFor={item.content.substring(0, 7) + index}
                            >
                            {item.content}
                        </label>
                        </div>
                </li>
            )
        })}
      </ul>
      <div className="grid gap-6 mb-6 md:grid-cols-4">
        <div>
            <label htmlFor="first_name" className="label">First name</label>
            <input type="text" id="first_name" className="custom-input" placeholder="John" required/>
        </div>
        <div>
            <label htmlFor="last_name" className="label">Last name</label>
            <input type="text" id="last_name" className="custom-input" placeholder="Doe" required/>
        </div>
        <div>
            <label htmlFor="adress" className="label">Adress</label>
            <input type="text" id="adress" className="custom-input" placeholder="La La land" required/>
        </div>
        <div>
            <label htmlFor="phone" className="label">Phone</label>
            <input type="tel" id="phone" className="custom-input" placeholder="123-45-678" 
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
            required/>
        </div>
      </div>
        <div>
          <SubmitButton/>
        </div>
    </form>
  )
}

