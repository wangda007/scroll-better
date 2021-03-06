import React, { useRef, useEffect } from 'react'
import BScroll from '@better-scroll/core'
import NestedScroll from '@better-scroll/nested-scroll'

BScroll.use(NestedScroll)

const outerOpenData = ['๐๐ป  outer ๐๐ป ', '๐ ๐ค ๐ ๐คจ ๐ ๐ ']

const outerCloseData = ['๐ ๐ ๐ ๐ค ๐ฒ ๐ฒ ', '๐๐ป  outer ๐๐ป ']

const innerData = [
  '๐๐ป  inner ๐๐ป  ',
  '๐ ๐ค ๐ ๐คจ ๐ ๐ ',
  '๐๐ป  inner ๐๐ป ',
  '๐ ๐ ๐ ๐ค ๐ฒ โน๏ธ ',
  '๐๐ป  inner ๐๐ป ',
  '๐ฃ ๐ฃ ๐ฃ ๐ฃ ๐ฃ ๐ฃ ',
  '๐๐ป  inner ๐๐ป ',
  '๐ฅ ๐ฅ ๐ฅ ๐ฅ ๐ฅ ๐ฅ ',
]

const handleOuterClick = () => {
  alert('clicked outer item')
}

const handleInnerClick = () => {
  alert('clicked inner item')
}

const Horizontal = () => {
  const outerWrapperRef = useRef(null)
  const outerScrollRef = useRef(null)
  const innerWrapperRef = useRef(null)
  const innerScrollRef = useRef(null)

  useEffect(() => {
    if (!outerScrollRef.current) {
      outerScrollRef.current = new BScroll(outerWrapperRef.current, {
        nestedScroll: {
          groupId: 'horizontal-nested-scroll', // groupId is a string or number
        },
        scrollX: true,
        scrollY: false,
        click: true,
      })
    }
    if (!innerScrollRef.current) {
      innerScrollRef.current = new BScroll(innerWrapperRef.current, {
        // please keep the same groupId as above
        // outerScroll and innerScroll will be controlled by the same nestedScroll instance
        nestedScroll: {
          groupId: 'horizontal-nested-scroll',
        },
        scrollX: true,
        scrollY: false,
        click: true,
      })
    }

    return () => {
      outerScrollRef.current?.destroy()
      innerScrollRef.current?.destroy()
    }
  }, [])

  return (
    <div className="view">
      <div className="horizontal">
        <div className="outer-wrapper" ref={outerWrapperRef}>
          <div className="outer-content">
            <ul>
              {outerOpenData.map((item, index) => (
                <li
                  key={index}
                  className="list-item"
                  onClick={handleOuterClick}
                >
                  {item}
                </li>
              ))}
              <li className="list-item inner-list-item">
                <div className="inner-wrapper" ref={innerWrapperRef}>
                  <ul className="inner-content">
                    {innerData.map((item, index) => (
                      <li
                        key={index}
                        className="list-item"
                        onClick={handleInnerClick}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {outerCloseData.map((item, index) => (
                <li
                  key={index}
                  className="list-item"
                  onClick={handleOuterClick}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Horizontal
