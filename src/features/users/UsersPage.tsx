import { useState } from "react"
import { useUsers } from "../../hooks/useUsers" 
import { Table } from "../../components/ui/Table" 
import Modal from "../../Modal/Modal"
import {type Users } from "./users"

const UsersPage = () => {
  const {
    users,
    search,
    setSearch,
    toggleSort,
    sortKey,
    order,
  } = useUsers()

  const [selectedUser, setSelectedUser] = useState<Users | null>(null)

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      {/* SEARCH */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search users..."
        className="border p-2 mb-4 w-80"
      />

      {/* SORT */}
      <div className="mb-4 flex gap-4">
        <button onClick={() => toggleSort("name")}>
          Sort by Name ({sortKey === "name" ? order : "-"})
        </button>
        <button onClick={() => toggleSort("role")}>
          Sort by Role ({sortKey === "role" ? order : "-"})
        </button>
      </div>

      {/* TABLE */}
      <Table
        data={users}
        onRowClick={(user) => setSelectedUser(user)}
        columns={[
          { key: "fullname", header: "Name" },
          { key: "email", header: "Email" },
        ]}
      />

      {/* MODAL REUSE */}
      {selectedUser && (
        <Modal>
          <Modal.Content>
            <Modal.Header>User Details</Modal.Header>
            <Modal.Body>
              <p>Name: {selectedUser.fullname}</p>
              <p>Email: {selectedUser.email}</p>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      )}
    </div>
  )
}

export default UsersPage
