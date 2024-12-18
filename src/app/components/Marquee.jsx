
const Marquee = ({marqueeName}) => {
  return (
    <>
  <div className="marquee flex gap-4 overflow-hidden relative bg-primary my-8 py-8">
          <div className=" flex-shrink-0 flex justify-around min-w-full gap-4 animate-scroll">
            <h1 className="text-stroke-3 text-zinc-900">{marqueeName}</h1>
            <h1 className="text-stroke-3 text-zinc-900">{marqueeName}</h1>
            <h1 className="text-stroke-3 text-zinc-900">{marqueeName}</h1>
           
          </div>
          <div className=" flex-shrink-0 flex justify-around min-w-full gap-4 animate-scroll">
          <h1 className="text-stroke-3 text-zinc-900 ">{marqueeName}</h1>
            <h1 className="text-stroke-3 text-zinc-900 ">{marqueeName}</h1>
            <h1 className="text-stroke-3 text-zinc-900 ">{marqueeName}</h1>
          </div>
        </div>



    </>
  )
}

export default Marquee