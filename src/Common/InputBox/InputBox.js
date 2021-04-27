import './inputbox.scss'

const InputBox = ({label, labelText, type}) => {
    return (
        <div className='inputbox_wrapper'>
            <label className='inputbox_label' for={label}>{labelText}</label>
            <input type={type} className='inputbox_input' name={label} />
        </div>
    )
}

export default InputBox