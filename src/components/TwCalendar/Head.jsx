import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.css"

// 월 변경 버튼
const ChangeButton = (props) => (
    <button className="d-chg-btn" onClick={() => props.onClick()}>{props.children}</button>
)

// 월 표시
const MonthSpan = (props) => (
    <span className="month">{props.children}</span>
)

class Head extends Component {

    render() {
        const { date, onClick } = this.props
        const year = date.getFullYear(),
            month = date.getMonth() + 1

        return (
            <div className="tw-calendar-head">
                <div className="year">
                    {year}
                </div>
                <div className="form">
                    <ChangeButton
                        onClick={() => onClick("prev")}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </ChangeButton>
                    <MonthSpan>{month}월</MonthSpan>
                    <ChangeButton
                        onClick={() => onClick("next")}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </ChangeButton>
                </div>
            </div>
        )
    }
}

export default Head