import React, { Component } from 'react'

const DateChildButton = (props) => {
    return (
        <button
            className="date-btn"
            style={{
                gridColumn: `${props.col + 1}`,
                gridRow: `${props.row + 1}`
            }}
            onClick={() => props.onClick()}
        >
            {props.date}
        </button>
    )
}

class Body extends Component {

    // 달력 배열 생성
    createDates() {
        const { date } = this.props
        const monthFirstDate = new Date(date.getFullYear(), date.getMonth(), 1)
        const monthLastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0)
        const firstWeekDay = monthFirstDate.getDay()
        const dateRows = Math.floor((31 / 7) + 2)

        let dates = [];

        let count = 1;
        for (let i = 0; i < dateRows; i++) {
            let startWeekDay = 0
            dates[i] = []

            if (i === 0) startWeekDay = firstWeekDay

            for (let ii = startWeekDay; ii < 7; ii++) {
                dates[i][ii] = count++
                if (count > monthLastDate.getDate()) return dates
            }
        }

        return dates
    }

    render() {
        const dates = this.createDates()
        const dateChildren = dates.map((weekItem, weekRow) => {
            return weekItem.map((date, week) => {
                return (
                    <DateChildButton
                        key={`${weekRow}_${week}`}
                        date={date}
                        row={weekRow}
                        col={week}
                        onClick={() => this.props.onClick(date)}
                    />
                )
            })
        })

        return (
            <div className="tw-calendar-body">
                <div className="date-content">
                    {dateChildren}
                </div>
            </div>
        )
    }
}

export default Body