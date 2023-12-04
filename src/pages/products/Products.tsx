import { useState } from 'react'
import './products.scss'
import DataTable from '../../components/dataTable/DataTable'
import Add from '../../components/add/Add'
import { GridColDef } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
      field:"img",
      headerName:"Avatar",
      renderCell: (params)=>{
          return <img src={params.row.img || "/noavatar.png"} alt="" />
      }
  },
  
  {
    field: 'title',
    type:"string",
    headerName: 'Title',
    width: 250,
    editable: true,
  },
  {
    field: 'color',
    type:"string",
    headerName: 'Color',
    width: 150,
  }, {
    field: 'producer',
    type:"string",
    headerName: 'Producer',
    width: 150,
  },
  
  {
    field: 'inStock',
    headerName: 'In Stock',
    width: 100,
    type: "boolean",
  },
];


const Products = () => {
  const [open, setOpen] = useState(false)

  const { isLoading, data } = useQuery({
    queryKey: ['allproducts'],
    queryFn: () =>
      fetch("http://localhost:8800/api/products").then(
        (res) => res.json(),
      ),
  })

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={()=> setOpen(true)}>Add New Products</button>
      </div>
      
      {isLoading ? ("loading..." ) : (<DataTable slug="products" columns={columns} rows={data} />)}
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Products