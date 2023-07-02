

import { Checkbox } from '@mui/material'
import React from 'react'

const Checkboxx = () => {
    const [checked, setChecked] = React.useState(false);

    const handleCheck = (event) => {
        setChecked(event.target.checked)
        console.log(event.target.checked)
    }
    return (
    <Checkbox 
    checked={checked}
    onChange={handleCheck}
    />
    )
}

export default Checkboxx