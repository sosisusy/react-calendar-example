import React from 'react'

import Head from "./Head"
import Body from "./Body"
import "./Index.scss"

class Index extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }
    }

    // 월 변경
    handleChangeDate(type) {
        let increment

        switch (type) {
            case "prev":
                increment = -1
                break;
            case "next":
                increment = 1
                break;
            default:
                increment = 0
        }

        const { date } = this.state
        let newDate = new Date(date.getFullYear(), date.getMonth() + increment)

        this.setState({
            date: newDate
        })
    }

    // 날짜 클릭
    handleDateClick(d) {
        const { date } = this.state

        let newDate = new Date(date)
        newDate.setDate(d)

        if (this.props.onClick)
            this.props.onClick(newDate)
    }

    render() {
        const { date } = this.state

        return (
            <div className="tw-calendar">
                <Head
                    date={date}
                    onClick={(type) => this.handleChangeDate(type)}
                />
                <Body
                    date={date}
                    onClick={(date) => this.handleDateClick(date)}
                />
            </div>
        )
    }
}

export default Index