export function Button({ children, onClick, bgColor,hover }) {
  return (
    <button
      onClick={onClick}
      className={` ${bgColor} ${hover} my-4 w-1/3 self-center rounded-full py-3 text-white`}
    >
      {children}
    </button>
  );
}
