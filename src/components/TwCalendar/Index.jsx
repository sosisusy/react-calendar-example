import React from 'react'

import Head from "./Head"
import Body from "./Body"
// import "./Index.scss"

class Index extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }
    }

    render() {
        const { date } = this.state

        return (
            <div className="tw-calendar">
                <Head date={date} />
                <Body date={date} />
            </div>
        )
    }
}

export default Index