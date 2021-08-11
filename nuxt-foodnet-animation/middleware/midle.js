// import { TweenMax, TimelineMax } from "gsap";
export default () => {
  console.log('test')
  const timeline = new TimelineMax()
  timeline
    .add([
      TweenMax.to('#title', 1, {
        css: {
          background: '#F3FFD8',
          transition: 'ease',
        }
      })
    ])
    .to('#title', 1.1, {
      css: {
        background: '#E9FFA5',
      }
    })
    .to('#title', 1.2, {
      css: {
        background: '#DBFF71',
      }
    })
    .to('#title', 1.3, {
      css: {
        background: '#D0FF43',
      }
    })
    .to('#title', 1.4, {
      css: {
        background: '#D7EEFF',
      }
    })
    .to('#title', 1.5, {
      css: {
        background: '#A7F1FF',
      }
    })
    .to('#title', 1.6, {
      css: {
        background: '#60EEFF',
      }
    })
    .to('#title', 1.7, {
      css: {
        background: '#00ECFF',
      }
    })

}