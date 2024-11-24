import { SetStateAction, useState } from "react"

interface SearchBarProp {

    onChange: (keyword: string) => void;

}

function SearchItemBar({ onChange }: SearchBarProp) {

    const [keyword, setKeyword] = useState("")



    const handleOnchange = (event: { target: { value: SetStateAction<string> } }) => {

        setKeyword(event.target.value)
        onChange(event.target.value as string)
    }

    return (

        <div className="flex justify-center mb-3 flex-col text-center">
            <label htmlFor="search" className="block mb-2 text-m text-center font-medium text-white">Search</label>
            <input className="bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block text-start p-2.5"
                onChange={handleOnchange}
                value={keyword}
                placeholder="Search Item Name" />
        </div>
    )
}
export default SearchItemBar