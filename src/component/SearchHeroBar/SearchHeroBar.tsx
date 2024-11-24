import { SetStateAction, useState } from "react"
import { atkTypeList, roleList } from "../../utils/searchList";


interface SearchBarProp {
    onChange: (keyword: string) => void;
    onSelectRole: (keyword: string) => void;
    onSelectAtk: (keyword: string) => void;
}

function SearchHeroBar({ onChange, onSelectRole, onSelectAtk }: SearchBarProp) {

    const [keyword, setKeyword] = useState("")

    const handleSearchInput = (event: { target: { value: SetStateAction<string> } }) => {
        setKeyword(event.target.value)
        onChange(event.target.value as string)
    }
    const handleAtkTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelectAtk(event.target.value);
    }
    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelectRole(event.target.value);
    }

    return (
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-4 px-6 rounded-lg shadow-lg ">
            <div>
                <label
                    htmlFor="atkType"
                    className="block mb-2 text-m text-center font-medium text-white">
                    Atk Type
                </label>
                <select
                    id="atkType"
                    className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5 "
                    onChange={handleAtkTypeChange}
                >
                    {atkTypeList.map((type, index) => {
                        return <option key={`atk-type-key-${index}`} value={type} >
                            {type}
                        </option>
                    })}
                </select>
            </div>
            <div>
                <label
                    htmlFor="role"
                    className="block mb-2 text-m text-center font-medium text-white">
                    Role
                </label>
                <select
                    id="role"
                    className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5 "
                    onChange={handleRoleChange}
                >
                    {roleList.map((role, index) => {
                        return <option className="capitalize" key={`role-key-${index}`} value={role} >
                            {role}
                        </option>
                    })}
                </select>
            </div>
            <div>
                <label
                    htmlFor="search"
                    className="block mb-2 text-m text-center font-medium text-white">
                    Search
                </label>
                <input className="bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5"
                    id="search"
                    type="text"
                    onChange={handleSearchInput}
                    value={keyword}
                    placeholder="Search Hero Name" />
            </div>
        </div>
    )
}
export default SearchHeroBar