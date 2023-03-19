import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    console.log(props.value)
    return (
        <Slider
            value={props.value}
            onChange={props.onChange}
            sx={{ /*// стили для слайдера // пишет студент*/

                width: 500

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )

}
export default SuperRange
