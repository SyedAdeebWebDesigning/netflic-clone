import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";

type Inputs = {
  email: string,
  password: string,
};

function Login()
{
  const [ login, setLogin ] = useState(false)
  const {signIn, signUp} = useAuth()

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
    if (login) {
      await signIn(email, password)
    } else {
      await signUp(email, password)
    }
  };

  return (
    <div className="relative flex h-screen w-screen bg-black md:items-center justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />

      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={ 150 }
        height={ 150 }
      />

      <form onSubmit={ handleSubmit(onSubmit) } action="" className=" relative mt-24 space-x-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <div className="space-y-4 ">
          <h1 className="text-4xl font-semibold">Sign In</h1>
          <label className="inline-block w-full">
            <input type="email"
              placeholder="Email"
              className="input"
              { ...register('email', { required: true }) }
            />
            { errors.email && <span className="text-[#e50914] transition-all animate-pulse duration-200 font-bold text-xl">Please enter a valid Email</span> }
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              { ...register('password', { required: true }) }
            />
            { errors.password && <span className="text-[#e50914] transition animate-pulse duration-75 font-bold text-xl">Please enter a valid Password</span> }
          </label>
          <button className="w-full rounded bg-[#e50914] py-3 font-semibold" onClick={() => setLogin(true)}>Sign In</button>
          <div className="text-[gray]">
            New to Netflix?
            <button type="submit" className='ml-2 text-white hover:underline transition duration-100 hover:scale-105' onClick={ () => setLogin(false) }>Sign Up now</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login

function signUp(email: string, password: string)
{
  throw new Error("Function not implemented.");
}
function signIn(email: string, password: string)
{
  throw new Error("Function not implemented.");
}

