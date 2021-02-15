import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg'
import { generateList } from '../../utils/list'
import './styles.css'

type Props = {
   totalPages: number
}

const Pagination = ({ totalPages }:Props ) => {

   const items = generateList(totalPages)

   return (
      <div className="pagination-container">
         <ArrowIcon className="pagination-previous" />

         {items.map(item => (
            <div
               className="pagination-item"
               key={item}
            >
               { item + 1}
            </div>
         ))}

         <ArrowIcon className="pagination-next" />
      </div>

   )
}
export default Pagination