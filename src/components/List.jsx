function List({people}){
    return(
        <>
            <div>
                {people.map((person) => {
                    const {id, name, age} = person;
                    return(
                    <div 
                        key={id}
                        className="person"
                    >
                        <div>
                            <h3>{name}</h3>
                            <p>{age}years</p>
                        </div>

                    </div>)
                })}
            </div>
        </>
    )
}

export default List