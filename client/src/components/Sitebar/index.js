import react, {useState} from "react"

function Sitebar () {
    const {catagories} = useState([
        {name: 'LegacyMedicalGroup'},
        {name: 'LegacySeniorConnect'},
        // {LegacyMedical}
    ]);

    const [currentCatagory, changeCurrentCatagory] = useState(catagories[0]);

    return(
        <>
        <div>
            <nav>
                <ul>
                    {catagories.map(catagorie => (
                        <li>
                            {catagorie.name}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Sitebar