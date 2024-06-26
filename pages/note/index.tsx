import NoteCard from '@/components/NoteCard'
import RootLayout from '@/components/RootLayout'
import React from 'react'

const index = () => {
  return (
    <RootLayout>
    <div className="flex flex-1 mt-24">
    <div className="common-container">
    <div className="grid-container">
        {notes.slice().reverse().map((note) => (
          <NoteCard
            key={note._id}
            note={note}
          />
        ))}
      </div>
    
    </div>
    </div>
    </RootLayout>
  )
}

export default index