const Wolv = ()=>{
    return(
        <>
        <div className="w-full p-3 flex flex-col md:flex-row flex-wrap gap-2">
        <div className=" w-full md:w-[40%]">
          <img
            className="w-full rounded-3xl mx-auto"
            src="https://deadline.com/wp-content/uploads/2024/04/MCDDEAN_WD043.jpg?w=681&h=383&crop=1"
          />
          <div className="flex gap-2 justify-center cursor-pointer"></div>
        </div>

        <div className="w-full md:w-[55%]">
          <h1 className="text-center text-3xl font-bold">Wolverine</h1>
          <p className="font-bold p-3">
          Wolverine (birth name: James Howlett;[1] alias: Logan and Weapon X) is a fictional character appearing in American comic books published by Marvel Comics, often in association with the X-Men. He is a mutant with animal-keen senses, enhanced physical capabilities, a powerful regenerative ability known as a healing factor, a skeleton reinforced with the unbreakable fictional metal adamantium, significantly delayed aging and a prolonged lifespan and three retractable claws in each hand. In addition to the X-Men, Wolverine has been depicted as a member of X-Force, Alpha Flight, the Fantastic Four and the Avengers
          </p>
          <h3 className="font-bold mt-2 text-center">Wolverine: Films</h3>
          <ul className="font-bold p-3">
            <li>1. X-Men Origins: Wolverine (2009)</li>
            <li>2. The Wolverine (2013)</li>
            
          </ul>
        </div>
      </div>
        </>
    )
}

export default Wolv;