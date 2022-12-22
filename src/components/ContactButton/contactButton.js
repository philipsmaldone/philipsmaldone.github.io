import React from 'react'

const ContactButton = () => {
  const [showing, setShowing] = React.useState(false)

  const nothingToScrapeHere = () => {
    return ['nothingconnothing'.slice(7, 10) + 'taate to the het'.replace('ate to the he', 'c'), 'philip smaldone is a gom'.replace(' is a g', '.c').replace(' ', '')]
  }
  let component
  if (showing) {
    component =
      <div>
        <p className='underline text-blue-600'>
          {nothingToScrapeHere().join('@')}</p>
     </div>
  } else {
    component =
      <p
        onClick={() => setShowing(true)}
        className={'inline-block px-6 py-2.5 bg-gray-700  border-sky-700 border-b-2 font-bold text-white rounded shadow-lg hover:bg-sky-700 active:bg-sky-800 transition duration-150 ease-in-out'}
      >
        Click for Details
      </p>
  }

  return (
        <React.Suspense fallback={<div>loading...</div>}>
          <div>
            {component}
          </div>
        </React.Suspense>
  )
}

export default ContactButton
