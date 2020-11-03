import React from "react"

export default function Article(props) {
	return (
		<div className="p-2 max-w-3xl mx-auto prose">
			<h1>{props.title}</h1>
			{props.children}
		</div>
	)
}
