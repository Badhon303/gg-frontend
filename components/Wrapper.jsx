const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`w-full container px-5 md:px-10 mx-auto ${className || ""}`}
      // max-w-7xl
    >
      {children}
    </div>
  )
}

export default Wrapper
