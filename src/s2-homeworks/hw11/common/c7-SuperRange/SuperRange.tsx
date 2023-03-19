import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            value={props.value}
            onChange={props.onChange}
            defaultValue={props.defaultValue}
            sx={{ /*// стили для слайдера // пишет студент*/

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}
console.log(Slider)
export default SuperRange
