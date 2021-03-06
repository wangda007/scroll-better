import React, { useRef, useEffect } from 'react'
import BScroll from '@better-scroll/core'
import NestedScroll from '@better-scroll/nested-scroll'

BScroll.use(NestedScroll)

const outerOpenData = [
  '----Outer Start----',
  '๐๐ป outer scroll ๐๐ป ',
  '๐ ๐ค ๐ ๐คจ ๐ ๐ ',
  '๐๐ป outer scroll ๐๐ป ',
]

const outerCloseData = [
  '๐๐ป outer scroll ๐๐ป ',
  '๐ ๐ค ๐ ๐คจ ๐ ๐ ',
  '๐๐ป outer scroll ๐๐ป ',
  '๐ ๐ ๐ ๐ค ๐ฒ ๐ฒ ',
  '๐ ๐ค ๐ ๐คจ  ๐ ๐ ',
  '๐๐ป outer scroll ๐๐ป ',
  '๐๐ป outer scroll ๐๐ป ',
  '๐ ๐ ๐ ๐ค ๐ฒ ๐ฒ ',
  '๐ ๐ค ๐ ๐คจ  ๐ ๐ ',
  '๐๐ป outer scroll ๐๐ป ',
  '๐๐ป outer scroll ๐๐ป ',
  '๐ ๐ค ๐ ๐คจ ๐ ๐ ',
  '๐๐ป outer scroll ๐๐ป ',
  '----Outer End----',
]

const innerData = [
  '------Inner Start-----',
  '๐ ๐ ๐ ๐คฃ ๐ ๐ ',
  '๐๐ป inner scroll ๐๐ป ',
  '๐ ๐ค ๐ ๐คจ ๐ ๐ ',
  '๐๐ป inner scroll ๐๐ป ',
  '๐ ๐ ๐ ๐ค ๐ฒ ๐ ๐ ',
  '๐๐ป inner scroll ๐๐ป ',
  '๐ฃ ๐ฃ ๐ฃ ๐ฃ ๐ฃ ๐ฃ ',
  '๐๐ป inner scroll ๐๐ป ',
  '๐ฅ ๐ฅ ๐ฅ ๐ฅ ๐ฅ ๐ฅ ',
  '๐๐ป inner scroll ๐๐ป ',
  '๐ค ๐ค ๐ค ๐ค ๐ค ๐ค ',
  '๐๐ป inner scroll ๐๐ป ',
  '๐ฆ ๐ฆ ๐ฆ ๐ฆ ๐ฆ ๐ฆ ',
  '๐๐ป inner scroll ๐๐ป ',
  '๐ ๐ ๐ ๐ ๐ ๐ ',
  '๐๐ป inner scroll ๐๐ป ',
  '๐ ๐ ๐ ๐ ๐ ๐ ',
  '๐๐ป inner scroll ๐๐ป ',
  'โ๐ป โ๐ป โ๐ป โ๐ป โ๐ป โ๐ป ',
  '-----Inner End-----',
]

const handleOuterClick = () => {
  alert('clicked outer item')
}

const handleInnerClick = () => {
  alert('clicked inner item')
}

const Vertical = () => {
  const outerWrapperRef = useRef(null)
  const outerScrollRef = useRef(null)
  const innerWrapperRef = useRef(null)
  const innerScrollRef = useRef(null)

  useEffect(() => {
    if (!outerScrollRef.current) {
      outerScrollRef.current = new BScroll(outerWrapperRef.current, {
        nestedScroll: {
          groupId: 'vertical-nested-scroll', // groupId is a string or number
        },
        click: true,
      })
    }
    if (!innerScrollRef.current) {
      innerScrollRef.current = new BScroll(innerWrapperRef.current, {
        // please keep the same groupId as above
        // outerScroll and innerScroll will be controlled by the same nestedScroll instance
        nestedScroll: {
          groupId: 'vertical-nested-scroll',
        },
        click: true,
      })
    }

    return () => {
      outerScrollRef.current?.destroy()
      innerScrollRef.current?.destroy()
    }
  }, [])

  return (
    <div className="vertical view">
      <div className="outer-wrapper" ref={outerWrapperRef}>
        <div className="outer-content">
          <ul>
            {outerOpenData.map((item, index) => (
              <li
                key={index}
                className="outer-list-item"
                onClick={handleOuterClick}
              >
                {item}
              </li>
            ))}
            <div className="inner-wrapper" ref={innerWrapperRef}>
              <ul className="inner-content">
                {innerData.map((item, index) => (
                  <li
                    key={index}
                    className="inner-list-item"
                    onClick={handleInnerClick}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {outerCloseData.map((item, index) => (
              <li
                key={index}
                className="outer-list-item"
                onClick={handleOuterClick}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Vertical
