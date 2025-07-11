import { useState } from 'react'
import '../../App.css'
import { SupportForm } from '../SupportForm/SupportForm'
import { Toast } from '../Toast/Toast'

function App() {
  const [toast, setToast] = useState(false)

  return (
    <div>
      {toast &&  <Toast />}
      <SupportForm setToast={setToast}/> 
    </div>
  )
}

export default App
