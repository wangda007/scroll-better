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
  '----Outer End----',
]

const middleOpenData = [
  '----Middle Start----',
  '๐๐ป middle scroll ๐๐ป ',
  '๐ฃ ๐ฃ ๐ฃ ๐ฃ ๐ฃ ๐ฃ ',
]

const middleCloseData = [
  '๐๐ป middle scroll ๐๐ป ',
  '๐ค ๐ค ๐ค ๐ค ๐ค ๐ค ',
  '๐๐ป middle scroll ๐๐ป ',
  '๐ฆ ๐ฆ ๐ฆ ๐ฆ ๐ฆ ๐ฆ ',
  '๐๐ป middle scroll ๐๐ป ',
  '๐ ๐ ๐ ๐ ๐ ๐ ',
  '๐๐ป middle scroll ๐๐ป ',
  '๐ ๐ ๐ ๐ ๐ ๐ ',
  '๐๐ป middle scroll ๐๐ป ',
  'โ๐ป โ๐ป โ๐ป โ๐ป โ๐ป โ๐ป ',
  '----Middle End----',
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

const handleMiddleClick = () => {
  alert('clicked middle item')
}

const handleInnerClick = () => {
  alert('clicked inner item')
}

const TripleVertical = () => {
  const outerWrapperRef = useRef(null)
  const middleWrapperRef = useRef(null)
  const innerWrapperRef = useRef(null)

  useEffect(() => {
    const outerScroll = new BScroll(outerWrapperRef.current, {
      nestedScroll: {
        groupId: 'triple-nested-scroll', // groupId is a string or number
      },
      click: true,
    })
    const middleScroll = new BScroll(middleWrapperRef.current, {
      nestedScroll: {
        groupId: 'triple-nested-scroll', // groupId is a string or number
      },
      probeType: 2,
      click: true,
    })

    middleScroll.on('scroll', () => {
      console.log('middleScroll scroll')
    })

    const innerScroll = new BScroll(innerWrapperRef.current, {
      // please keep the same groupId as above
      // all scrolls will be controlled by the same nestedScroll instance
      nestedScroll: {
        groupId: 'triple-nested-scroll',
      },
      probeType: 2,
      click: true,
    })

    innerScroll.on('scroll', () => {
      console.log('innerScroll scroll')
    })
    innerScroll.on('scrollEnd', () => {
      console.log('innerScroll scrollEnd')
    })

    return () => {
      outerScroll.destroy()
      middleScroll.destroy()
      innerScroll.destroy()
    }
  }, [])

  return (
    <div className="triple-vertical view">
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
          </ul>

          <div className="middle-wrapper" ref={middleWrapperRef}>
            <div className="middle-content">
              <ul>
                {middleOpenData.map((item, index) => (
                  <li
                    key={index}
                    className="middle-list-item"
                    onClick={handleMiddleClick}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="inner-wrapper" ref={innerWrapperRef}>
                <div className="inner-content">
                  <ul>
                    {innerData.map((item, index) => (
                      <li
                        key={index}
                        className="middle-list-item"
                        onClick={handleInnerClick}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <ul>
                {middleCloseData.map((item, index) => (
                  <li
                    key={index}
                    className="middle-list-item"
                    onClick={handleMiddleClick}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul>
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

export default TripleVertical
