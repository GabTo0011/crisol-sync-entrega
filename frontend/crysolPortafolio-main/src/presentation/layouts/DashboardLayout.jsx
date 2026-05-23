import Sidebar from '../components/layout/Sidebar'
import TopNav from '../../shared/components/navigation/TopNav'
import BottomNav from '../../shared/components/navigation/BottomNav'

const DashboardLayout = ({ sidebarProps, topNavProps, bottomNavProps, children }) => {
  const useMobileTabletNav = Boolean(topNavProps || bottomNavProps)

  return (
    <div className="app-theme flex h-screen overflow-hidden bg-slate-100 font-sans text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      {useMobileTabletNav ? (
        <div className="hidden lg:block">
          <Sidebar {...sidebarProps} />
        </div>
      ) : (
        <Sidebar {...sidebarProps} />
      )}

      <div className="flex h-screen flex-1 flex-col overflow-hidden">
        {topNavProps ? <TopNav {...topNavProps} showOnTablet className="lg:hidden" /> : null}

        <main className="flex-1 overflow-y-auto bg-slate-100 px-3 py-4 pb-22 sm:px-5 sm:py-5 lg:px-8 lg:pb-6 dark:bg-slate-950">
          {children}
        </main>
      </div>

      {bottomNavProps ? <BottomNav {...bottomNavProps} showOnTablet className="lg:hidden" /> : null}
    </div>
  )
}

export default DashboardLayout