import { Navigate } from 'react-router-dom'

export default function MainPage() {
  return <Navigate to='/dashboard-a' replace={true} />
}
