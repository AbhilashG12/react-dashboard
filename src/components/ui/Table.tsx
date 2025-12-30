type Column<T> = {
  key: keyof T
  header: string
  render?: (value: T[keyof T], row: T) => React.ReactNode
}

type TableProps<T> = {
  data: T[]
  columns: Column<T>[]
  onRowClick?: (row: T) => void
}

export function Table<T>({
  data,
  columns,
  onRowClick,
}: TableProps<T>) {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)} className="border p-2">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, idx) => (
          <tr
            key={idx}
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => onRowClick?.(row)}
          >
            {columns.map((col) => (
              <td key={String(col.key)} className="border p-2">
                {col.render
                  ? col.render(row[col.key], row)
                  : String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
