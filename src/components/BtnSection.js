import React from 'react'
import ImgButton from './ImgButton'

function BtnSection() {
    return (
        <div className=" home-cards row">
            <h1 className="header-text">What's on now?</h1>
            <ImgButton
                href="/InfinitySaga"
                image="https://media.vanityfair.com/photos/6114a5d50b170c6defc5cb3f/master/pass/What%20If%20lead%20image.jpeg"
                alt="Poster for Avengers: Endgame"
                link="WHAT IF...?"
                text="All episodes now streaming on Disney+"
            />
            <h1 className="header-text">What's' Next?</h1>
            <ImgButton
                href="/NextSaga"
                image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b4d6e0f-04fe-49ac-a8c8-ca6e8024a16f/deps815-5797f60e-59f7-4a01-bf5d-0511168cf62d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiNGQ2ZTBmLTA0ZmUtNDlhYy1hOGM4LWNhNmU4MDI0YTE2ZlwvZGVwczgxNS01Nzk3ZjYwZS01OWY3LTRhMDEtYmY1ZC0wNTExMTY4Y2Y2MmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sIL_bUrwn6TQDCUbhutq4zRyKAfFqpV2U566lYkdd-A"
                alt="WandaVision Poster"
                link="Eternals"
                text="In theaters November 5th"
            />
            <h1 className="header-text">What do you want to know?</h1>
            <ImgButton
                href="/FAQ"
                image="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/09/Venom-Let-There-Be-Carnage-Marvel-Sony-Tom-Hardy.jpg?q=50&fit=contain&w=943&h=472&dpr=1.5"
                alt="Avengers Campus concept art"
                link="Is Venom part of the MCU?"
                text="Find out in the FAQ"
            />
            {/* </div> */}
        </div>
    )
}

export default BtnSection
