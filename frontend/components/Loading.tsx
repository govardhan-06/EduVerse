'use client';
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="relative flex flex-col items-center">
        <Image
          src="/images/logo.png"
          alt="EduVerse Logo"
          width={150}
          height={150}
          className="animate-pulse"
        />
      
        <div className="mt-8">
          <p className="font-sans text-xl">Loading Space...</p>
        </div>
      </div>

      <div className="fixed bottom-8">
        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
          Powered by EduVerse
        </p>
      </div>
    </div>
  )
}