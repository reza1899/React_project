const colorFull = WrappedComponent => {
const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

let color = colors[Math.floor(Math.random() * colors.length)];

return (props) => {
    return(
        <div className={`bg-${color}`}>
            <WrappedComponent {...props}/>
        </div>
    )
}
}
export default colorFull