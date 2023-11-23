import { SubmitButton } from "./submit-button"

const covenantList = [
    {
        artticle: 1,
        content: 'Every Jew, Christian and non-Muslim in the world must be slaughtered.'
    },
    {
        artticle: 2,
        content: 'Do you endorse making homosexuality punishable by jail or death.'
    },
    {
        artticle: 4,
        content: 'You agree that Iran should use Palestinians as puppets to spread radical jihad and destroy the west?'
    },
    {
        artticle: 5,
        content: "You support strict Sharia law which bans women from showing their knees, hair, playing sports in public, not being able to travel without a man's premission?"
    },
    {
        artticle: 6,
        content: "You want a terrorist group that beheads babys and rapes girls to replace the only democracy in the middle east?"
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
      <div>
        <SubmitButton/>
      </div>
    </form>
  )
}

