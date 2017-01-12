import React from 'react'
import TrackIcon from '../TrackIcon/TrackIcon'
import ChallengeStatus from '../ChallengeStatus/ChallengeStatus'
import './ChallengeCard.scss'
import moment from 'moment'
import PrizesTooltip from '../PrizesTooltip'

// Constants
const VISIBLE_TECHNOLOGIES = 3
const CHALLENGE_URL = 'https://www.topcoder.com/challenge-details/'

// Get the End date of a challenge
const getEndDate = (date) => {
  return moment(date).format('MMM DD')
}

// Convert a number to string with thousands separated by comma
const numberWithCommas = (n) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function ChallengeCard ({challenge, userProfile}) {
  challenge.technologyList = challenge.technologies
  if (challenge.technologyList.length > VISIBLE_TECHNOLOGIES) {
    const lastItem = '+' + (challenge.technologyList.length - VISIBLE_TECHNOLOGIES)
    challenge.technologyList = challenge.technologyList.slice(0, VISIBLE_TECHNOLOGIES)
    challenge.technologyList.push(lastItem)
  }
  challenge.prize = challenge.prize || []
  challenge.totalPrize = challenge.prize.reduce((x, y) => y + x, 0)

  const renderTechnologies = challenge.technologyList.map((c) => {
    return (<a href="#" key={c} className="technology">{c}</a>)
  })

  return (
    <div className="challengeCard">
      <div className="left-panel">
        <div className="challenge-track">
          <TrackIcon track={challenge.track} subTrack={challenge.subTrack} tcoEligible={challenge.eventName} />
        </div>
        <div className="challenge-details">
          <a className="challenge-title" href={`${CHALLENGE_URL}${challenge.challengeId}/?type=${challenge.track.toLowerCase()}`}>
            {challenge.challengeName}
          </a>
          <div className="details-footer">
            <span className="date">{challenge.status === 'Active' ? 'Ends' : 'Ended'} {getEndDate(challenge.submissionEndDate)}</span>
            {challenge.technologies.length === 0 ? <a className="technology">N/A</a> : renderTechnologies}
          </div>
        </div>
      </div>
      <div className="right-panel">
        <PrizesTooltip challenge={challenge}></PrizesTooltip>
        <ChallengeStatus challenge={challenge} userProfile={userProfile}/>
      </div>
    </div>
  )
}

export default ChallengeCard