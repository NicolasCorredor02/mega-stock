function MapMenu({items}) {
    return(
        <>
            {items.map(item => (
                <li key={item.id}>
                    <a href={item.href} className="font-extralight text-secondary duration-150">{item.name}</a>
                </li>
            ))}
        </>
    )
}

export default MapMenu