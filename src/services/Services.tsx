import { createContext } from "react"

const SelectContext = createContext({})

const Select = ({children}:{children:React.ReactNode}) => {
  if (!children) return null;

  return (
    <SelectContext.Provider value={{}}>
      <div>
        {children}
      </div>
    </SelectContext.Provider>
  )
}

const Label = ({children}:{children:React.ReactNode})=>{
  return <label>{children}</label>
}

const Dropdown = ({children}:{children:React.ReactNode})=>{
  return <select>{children}</select>
}

Select.Label = Label;
Select.Dropdown = Dropdown;

export default Select;