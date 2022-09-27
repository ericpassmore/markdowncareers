import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FaGoogle } from 'react-icons/fa'


const HomeOrig: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Markdown Jobs</title>
        <meta name="description" content="JDs for ME" />
        <link rel="icon" href="/cropped-EOS-Network-Foundation-Site-Icon-1-150x150.png" />
      </Head>

      <main className="flex items-center justify-center w-full flex-1 px-0 text-center">
          <div className="bg-white rounded-2xl shadow-2xl w-2/3 max-w-4xl p-5">
              <div className="text-left font-bold">EOS Network Foundation</div>
              <div className="py-10">
                  <h2 className="text-3xl font-bold text-green-500">Sign Into Account</h2>
                  <div className="border-2 w-10 border-green-500 inline-block"></div> { /* separator */ }
                  <div className="flex justify-center my-2">
                      <a href="#" className="border-2 border-grey-200 rounded-full p-3 mx-1">
                          <FaGoogle className="text-sm"></FaGoogle>
                      </a>
                  </div> { /* Social Login Section */ }
                  <p className="text-gray-400 my-3">Login using your google account</p>
              </div> {/* Sign-In section */ }
          </div>
      </main>


    </div>
  )
}

export default HomeOrig
