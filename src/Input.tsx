import * as React from "react"

export interface InputProps {
	defaultValue?: string | number
	label?: string
	placeholder?: string
	invalidMessage?: string
	classNames?: {
		wrapper?: string
		
	}
	onChange: (
		rawValue: string
	) => string
}

export interface InputState {

}

export default
class Input
extends React.Component<InputProps, InputState> {
	render() {
		return <>

		</>
	}
}