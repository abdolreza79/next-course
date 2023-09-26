import UsersTable from './UsersTable'

async function UserPage({searchParams:{sortOrder}}) {
  return (
    <div>
      <UsersTable sortOrder={sortOrder}/>
    </div>
  )
}

export default UserPage
