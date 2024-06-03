import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'
// import SubPage1 from './SubPage1'
// import SubPage2 from './SubPage2'
import MainPage from './MainPage'
// import { Button } from './components/ui/button'
import { DashboardA } from './DashboardA'
// import { Dashboard2 } from './Dashboard2'
// import { SheetContent } from './components/ui/sheet'
import {
  // Home,
  LineChart,
  Package,
  // Package2,
  // ShoppingCart,
  // Users,
} from 'lucide-react'
import { DashboardB } from './DashboardB'
// import { Badge } from './components/ui/badge'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from './components/ui/card'
// import { ModeToggle } from './components/mode-toggle'
// import { Dashboard2 } from './Dashboard2'

export default function App() {
  return (
    <div className='flex h-full items-stretch'>
      <Router basename='/service2'>
        <Sidebar2 />
        <Routes>
          <Route path='dashboard-a' element={<DashboardA />} />
          <Route path='dashboard-b' element={<DashboardB />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  )
}

function Sidebar2() {
  const location = useLocation()
  return (
    <div className='border-r pt-3'>
      <nav className='grid w-72 items-start px-2 text-sm font-medium lg:px-4'>
        {/* <a
        href='#'
        className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
      >
        <Home className='h-4 w-4' />
        Dashboard
      </a>
      <a
        href='#'
        className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
      >
        <ShoppingCart className='h-4 w-4' />
        Orders
        <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
          6
        </Badge>
      </a> */}
        <Link
          to='/dashboard-a'
          className={`flex items-center gap-3 rounded-lg ${location.pathname === '/dashboard-a' ? 'bg-muted' : ''} text-primary hover:text-primary px-3 py-2 transition-all`}
        >
          <Package className='h-4 w-4' />
          Dashboard A{' '}
        </Link>
        {/* <a
        href='#'
        className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
      >
        <Users className='h-4 w-4' />
        Customers
      </a> */}
        <Link
          to='/dashboard-b'
          className={`flex items-center gap-3 rounded-lg ${location.pathname === '/dashboard-b' ? 'bg-muted' : ''} text-primary hover:text-primary px-3 py-2 transition-all`}
        >
          <LineChart className='h-4 w-4' />
          Dashboard B
        </Link>
      </nav>
    </div>
  )
}

// function Sidebar() {
//   const location = useLocation();
//   return (
//     <div className="w-72 h-full bg-green-500 bg-opacity-50">
//       <h6>side bar</h6>
//       <div className="flex flex-col mt-3">
//         <Link
//           to={"/"}
//           className={`${location.pathname === "/" ? "bg-green-900" : ""}`}
//         >
//           go to Main Page
//         </Link>
//         <Link
//           to={"/subpage1"}
//           className={`${
//             location.pathname === "/subpage1" ? "bg-green-900" : ""
//           }`}
//         >
//           go to SubPage 1
//         </Link>
//         <Link
//           to={"/subpage2"}
//           className={`${
//             location.pathname === "/subpage2" ? "bg-green-900" : ""
//           }`}
//         >
//           go to SubPage 1
//         </Link>
//       </div>
//     </div>
//   );
// }
