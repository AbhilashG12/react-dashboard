import { useState,useContext,createContext } from "react"

interface ModalType {
    isOpen : boolean,
    open : () => void,
    close : () => void,
}

const ModalContext = createContext<ModalType|null>(null)

const Modal = ({children}:{children:React.ReactNode}) => {
    const [isOpen,setIsopen] = useState(false);
    const open=()=> setIsopen(true);
    const close=()=> setIsopen(false)
  return (
    <ModalContext.Provider value={{isOpen,open,close}}>
      {children}
    </ModalContext.Provider>
  )
}


 const useModal=()=>{
    const ctx = useContext(ModalContext);
    if(!ctx){
        throw new Error("Modal components should be inside Provider")
    }
    return ctx
}


const Trigger=({children}:{children:React.ReactNode})=>{
    const {open} = useModal();

    return (
        <div onClick={open} className="inline-block">
            {children}
        </div>
    )

}

const Content =({children}:{children:React.ReactNode})=>{

    const {isOpen,close} = useModal();

    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center" onClick={close}>
            <div className="bg-white rounded-lg p-6 min-w-[300px]" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )

}

const Header = ({ children }: { children: React.ReactNode }) => {
  const { close } = useModal()

  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">{children}</h2>
      <button onClick={close}>✕</button>
    </div>
  )
}

const Body = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-gray-700">{children}</div>
}

Modal.Trigger = Trigger
Modal.Content = Content
Modal.Header = Header
Modal.Body = Body


export default Modal
