
const Footer = () => {
  return (
    <div className='bg-mintGreen border-red-400 border-4 h-96 mt-80 w-full'>
    <div className="bg-lightMint h-80 border-4 border-green-500 -mt-52 rounded-lg mx-20 flex">
        <div className="border-4 w-3/5">
            <h1 className="text-blackGreen">Subscribe Newsletter</h1>
            <h3 className="">The travel</h3>
            <p className="">Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
            <div className="border-4">
                <input
                    className="bg-white"
                    placeholder="Your email address"
                />
                    <button className="bg-blackGreen text-white rounded-lg">Subscribe</button>
            </div>
        </div>
    </div>
      

      <div className="grid grid-cols-6 space-x-6">
        <img src="../assets/Group.svg" alt="logo" />
        <div className="flex text-blackGreen">
            
        </div>
      </div>
    </div>
  )
}

export default Footer
