import RootLayout from '@/components/RootLayout'
import NoteForm from '@/components/forms/NoteForm'
import { PencilIcon } from 'lucide-react'
import React from 'react'

const index = () => {
  return (
    <RootLayout>
      <div className="flex flex-1 mt-24">
    <div className="common-container">
      <div className="max-w-4xl flex-start gap-3 justify-start w-full">
      <PencilIcon className="w-[30px] h-[30px] icon" />
      <h2 className="text-2xl font-bold text text-left w-full">Write a Note</h2>
      </div>
      <NoteForm action="Create"/>
    </div>
  </div>
    </RootLayout>
  )
}

export default index
