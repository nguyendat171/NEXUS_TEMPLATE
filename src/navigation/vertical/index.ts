// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: 'tabler:layout-dashboard',
      path: '/dashboards/crm'
    },
    {
      title: 'Analytics',
      icon: 'tabler:brand-google-analytics',
      path: '/dashboards/analytics'
    },
    {
      title: 'Companies',
      icon: 'mdi:company',
      path: '/apps/invoice/list'
    },
    {
      title: 'Employers',
      icon: 'mdi:company',
      path: '/apps/employers'
    },
    {
      title: 'Employees & Subcontractors',
      icon: 'tabler:user',
      path: '/apps/user/list'
    },
    {
      title: 'Agency',
      icon: 'ri:building-4-line',
      path: '/apps/invoice/list'
    },
    {
      title: 'Assignments',
      icon: 'octicon:log-24',
      path: '/apps/invoice/list'
    },
    {
      title: 'Prospects',
      icon: 'mdi:user-arrow-left-outline',
      path: '/apps/invoice/list'
    },
    {
      title: 'HMRC Updates',
      icon: 'material-symbols:update',
      path: '/apps/invoice/list'
    },
    {
      title: 'Payments Settings',
      icon: 'ic:outline-payments',
      children: [
        {
          title: 'Payments',
          path: '/apps/invoice/list'
        },
        {
          title: 'Deductions',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Payment Rates',
          path: '/apps/invoice/edit'
        },
        {
          title: 'VAT Codes',
          path: '/apps/invoice/add'
        }
      ]
    },
    {
      title: 'Timesheets',
      icon: 'mdi:file-document-edit-outline',
      children: [
        {
          title: 'All Timesheets',
          path: '/apps/invoice/list'
        },
        {
          title: 'Pending Agency Approval',
          path: '/apps/invoice/list'
        },
        {
          title: 'Generate Draft Payroll',
          path: '/apps/invoice/list'
        },
        {
          title: 'Awaiting Invocie Generation',
          path: '/apps/invoice/list'
        }
      ]
    },
    {
      title: 'Invoices',
      icon: 'tabler:file-dollar',
      children: [
        {
          title: 'Invoices',
          path: '/apps/invoice/list'
        },
        {
          title: 'Credit Notes',
          path: '/apps/invoice/list'
        }
      ]
    },
    {
      title: 'Reports',
      icon: 'iconoir:reports',
      children: [
        {
          title: 'Payroll',
          path: '/apps/user/list'
        },
        {
          title: 'Pension',
          path: '/apps/user/list'
        },
        {
          title: 'Management',
          path: '/apps/user/list'
        },
        {
          title: 'Bank Files',
          path: '/apps/user/list'
        }
      ]
    },
    {
      title: 'Documents',
      icon: 'ion:document-attach-outline',
      path: '/apps/invoice/list'
    },
    {
      title: 'Import',
      icon: 'tabler:database-import',
      children: [
        {
          title: 'Agencies',
          path: '/apps/user/list'
        },
        {
          title: 'Employees',
          path: '/apps/user/list'
        },
        {
          title: 'Prospects',
          path: '/apps/user/list'
        },
        {
          title: 'Timesheets',
          path: '/apps/user/list'
        }
      ]
    },
    {
      title: 'KID',
      icon: 'mdi:file-document-check-outline',
      path: '/apps/invoice/list'
    },
    {
      title: 'RTI Filings History',
      icon: 'ic:outline-history',
      children: [
        {
          title: 'FPS',
          path: '/apps/user/list'
        },
        {
          title: 'EPS',
          path: '/apps/user/list'
        },
        {
          title: 'CIS 300',
          path: '/apps/user/list'
        }
      ]
    },
    {
      title: 'Activity Logs',
      icon: 'icon-park-outline:log',
      path: '/apps/invoice/list'
    },
    {
      title: 'Roles & Permissions',
      icon: 'tabler:settings',
      children: [
        {
          title: 'Roles',
          path: '/apps/roles'
        },
        {
          title: 'Permissions',
          path: '/apps/permissions'
        }
      ]
    }
  ]
}

export default navigation
