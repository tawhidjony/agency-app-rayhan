import SupplierTypeFormComponent from './form/supplierType.form.component'
import SupplierTypeView from './supplierType.view'

const SupplierTypeComponent = () => {
  return (
    <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-4'>
       <SupplierTypeFormComponent />
      </div>
      <div className='col-span-8 '>
       <SupplierTypeView />
      </div>
    </div>)
}

export default SupplierTypeComponent