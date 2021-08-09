<template>
 <div>
  <div class="title-opening">
    <p id="title">mogumogu...</p>
  </div>
  <div class="content effect-delay-display">
    <div class="msg">
      <p>Finished eating!</p>
    </div>
    <div class="tougue-solid icon"><i></i></div>
  </div>
</div>
</template>
<script>
import { TweenMax, TimelineMax } from 'gsap'
export default {
  mounted() {
    const timeline = new TimelineMax()
    timeline
      .add([
        TweenMax.to('#title', 0.1, {
          css: {
            position: 'absolute',
            opacity: '0',
            width: '100px',
            right: '40%',
            height: '50px',
            overflow: 'hidden'
          }
        })
      ])
      .to('#title', 1, {
        css: {
          width: '120px',
          opacity: '0.5'
        }
      })
      .to('#title', 2, {
        css: {
          width: '300px',
          opacity: '1'
        }
      })
      .to('#title', 2.5, {
        css: {
          opacity: '0',
          scale: '1.5'
        }
      })

  }
}
</script>

<style scoped lang="scss">
body {
  background: #fff;
  padding: 20px;
  font-family: Helvetica;
}

.page-index{
  position: relative;
}

.content {
  position: absolute;
  top: 50vh;
  right: 30vw;
  width: 200px;
}

.msg {
  display: inline-block;
}

.title-opening {
  position: absolute;
  top: 50vh;
  margin: auto;
  text-align: center;
  width: 85vw;
  font-size: 30px;
  word-break: break-all;
}

.effect-delay-display {
  animation-name: disp-delay;
  animation-delay: 5s;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
}

@keyframes disp-delay {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.tougue-solid.icon {
  color: #000;
  position: absolute;
  margin-left: 2px;
  margin-top: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: solid 1px currentColor;
  background-color: currentColor;
  display: inline-block;
  margin: 16px;
}

.tougue-solid.icon:before {
  content: '';
  position: absolute;
  left: 4px;
  top: 4px;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  color: white;
  background-color: currentColor;
}

.tougue-solid.icon:after {
  content: '';
  position: absolute;
  right: 4px;
  top: 4px;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  color: white;
  background-color: currentColor;
}

.tougue-solid.icon i {
  position: absolute;
  left: 4px;
  top: 10px;
  width: 8px;
  height: 1px;
  color: white;
  background-color: currentColor;
  -webkit-transform: rotate(-3deg);
          transform: rotate(-3deg);
}

.tougue-solid.icon i:before {
  content: '';
  position: absolute;
  top: -1px;
  right: 0px;
  width: 2px;
  height: 2px;
  border-radius: 2px;
  color: white;
  border-top: solid 1px transparent;
  border-right: solid 1px transparent;
  border-bottom: solid 1px currentColor;
  border-left: solid 1px currentColor;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}


</style>
