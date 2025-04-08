import { redirect } from "next/navigation";
import { ActionResult } from "@/types";


export async function SingIn(
  _:unknown, 
  formData: FormData,

): Promise<ActionResult> {
 
    console.log(formData.get('email'));
    // console.log(formData.get('password'));
    return redirect("/dashboard/sign-in")
}