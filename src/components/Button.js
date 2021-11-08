export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="min-w-[100px] bg-pink-500 p-3 rounded-lg text-white"
    >
      {children}
    </button>
  )
}
